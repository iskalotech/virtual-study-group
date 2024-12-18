import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

export default async function handler(
  req: { method: string; body: { idToken: any } },
  res: {
    setHeader: (arg0: string, arg1: string | string[]) => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): void; new (): any };
      end: { (arg0: string): void; new (): any };
    };
  }
) {
  if (req.method === "POST") {
    const { idToken } = req.body;

    try {
      // Verify the Firebase ID token
      const decodedToken = await admin.auth().verifyIdToken(idToken);

      // Set secure cookie options
      const cookieOptions = {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax" as const,
        path: "/",
      };

      // Set the auth cookie
      const cookieValue = `auth=${idToken}; Max-Age=${
        cookieOptions.maxAge
      }; Path=${cookieOptions.path}; HttpOnly; SameSite=${
        cookieOptions.sameSite
      }${cookieOptions.secure ? "; Secure" : ""}`;

      res.setHeader("Set-Cookie", cookieValue);
      res.status(200).json({ message: "User authenticated and cookie set." });
    } catch (error) {
      console.error("Error verifying ID token:", error);
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

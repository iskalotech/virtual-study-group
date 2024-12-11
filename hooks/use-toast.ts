'use client';

import { Toast, ToastActionElement, ToastProps } from '@/components/ui/toast';
import {
  useToast as useToastBase,
  ToastActionElement as ToastActionElementBase,
} from '@/components/ui/use-toast';

export type ToasterToast = ToastProps & {
  id: string;
  title?: string;
  description?: string;
  action?: ToastActionElement;
};

export const useToast = useToastBase;

export type { Toast, ToastActionElement };
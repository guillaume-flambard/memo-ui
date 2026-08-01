/**
 * memo-ui React Primitives
 * Core UI components with memo-ui signature
 *
 * Client entry for Next.js App Router — interactive primitives use hooks/context/Radix.
 */
'use client';

export { Button } from './primitives/button';
export type { ButtonProps } from './primitives/button';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './primitives/card';
export type { CardProps } from './primitives/card';

export { Input } from './primitives/input';
export type { InputProps } from './primitives/input';

export { Text } from './primitives/text';
export type { TextProps } from './primitives/text';

export { Stack } from './primitives/stack';
export type { StackProps } from './primitives/stack';

export { Icon } from './primitives/icon';
export type { IconProps } from './primitives/icon';

export { Badge } from './primitives/badge';
export type { BadgeProps } from './primitives/badge';

export { Divider } from './primitives/divider';
export type { DividerProps } from './primitives/divider';

export { Grid } from './primitives/grid';
export type { GridProps } from './primitives/grid';

export { Checkbox } from './primitives/checkbox';
export type { CheckboxProps } from './primitives/checkbox';

export { Radio, RadioGroup } from './primitives/radio';
export type { RadioProps, RadioGroupProps } from './primitives/radio';

export { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger, TooltipRoot } from './primitives/tooltip';
export type { TooltipProps } from './primitives/tooltip';

export { ToastProvider, ToastViewport, useToast } from './primitives/toast';
export type { ToastProviderProps, ToastViewportProps, ToastItem, ToastTone } from './primitives/toast';

export {
  Modal,
  ModalRoot,
  ModalTrigger,
  ModalClose,
  ModalPortal,
  ModalContent,
  ModalTitle,
  ModalDescription,
} from './primitives/modal';
export type { ModalProps, ModalContentProps } from './primitives/modal';

export { Tabs, TabsList, TabsTrigger, TabsContent } from './primitives/tabs';

export {
  Select,
  SelectValue,
  SelectGroup,
  SelectPortal,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
} from './primitives/select';

export { Label } from './primitives/label';
export type { LabelProps } from './primitives/label';

export { Textarea } from './primitives/textarea';
export type { TextareaProps } from './primitives/textarea';

export { Switch } from './primitives/switch';
export type { SwitchProps } from './primitives/switch';

export { Spinner } from './primitives/spinner';
export type { SpinnerProps } from './primitives/spinner';

export { Avatar } from './primitives/avatar';
export type { AvatarProps } from './primitives/avatar';

export { FormField } from './primitives/form-field';
export type { FormFieldProps } from './primitives/form-field';

export { Link } from './primitives/link';
export type { LinkProps } from './primitives/link';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './primitives/breadcrumb';
export type {
  BreadcrumbProps,
  BreadcrumbListProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbPageProps,
  BreadcrumbSeparatorProps,
} from './primitives/breadcrumb';

export { Pagination } from './primitives/pagination';
export type { PaginationProps } from './primitives/pagination';

export { Skeleton } from './primitives/skeleton';
export type { SkeletonProps } from './primitives/skeleton';

export { Progress } from './primitives/progress';
export type { ProgressProps } from './primitives/progress';

export { Alert } from './primitives/alert';
export type { AlertProps, AlertTone } from './primitives/alert';

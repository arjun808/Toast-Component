import { useState } from "react";
import Toast from "../components/Toast";
interface NotificationProps {
  message: string;
  duration?: number;
  type: string;
}
export const useToast = () => {
  const [showToast, setShowToast] = useState<NotificationProps | null>(null);
  let timer: ReturnType<typeof setTimeout> | null = null;
  const triggerToast = (notificationProps: NotificationProps) => {
    clearTimeout(timer!);
    setShowToast(notificationProps);
    timer = setTimeout(() => {
      setShowToast(null);
    }, notificationProps.duration || 1000);

    return () => clearTimeout(timer!);
  };

  const showToastComponent = () =>
    showToast ? (
      <Toast message={showToast.message} type={showToast.type} />
    ) : null;

  return { showToastComponent, triggerToast };
};

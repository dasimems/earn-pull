import { useCallback } from "react";
import { useActionContext } from "../context";
import ModalContent from "../components/screens/general/ModalContent";
import { measurements } from "../data/general";

const useLoader = () => {
  const { openModal, closeModal } = useActionContext();

  const openLoader = useCallback(action => {
    openModal({
      content: <ModalContent />,
      style: {
        height: measurements.windowHeight,
        borderRadius: 0,
        backgroundColor: "transparent"
      }
    });

    setTimeout(() => {
      closeModal();
      setTimeout(() => {
        if (typeof action === "function") {
          action();
        }
      }, 100);
    }, 2000);
  }, []);

  return { openLoader, closeLoader: closeModal };
};

export default useLoader;

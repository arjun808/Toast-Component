import { useToast } from "./hooks/useToast";

const App = () => {
  const { showToastComponent, triggerToast } = useToast();
  return (
    <div className="">
      <button
        onClick={() =>
          triggerToast({
            message: "jay shree ram",
            duration: 3000,
            type: "success",
          })
        }
      >
        success
      </button>
      <button
        onClick={() =>
          triggerToast({
            message: "unexpected error",
            duration: 3000,
            type: "error",
          })
        }
      >
        error
      </button>
      {showToastComponent()}
    </div>
  );
};

export default App;

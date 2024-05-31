import LoginForm from "./components/form/LoginForm";
import Illutration from "./components/illustration/Illutration"

export default function Page() {
  return (
    <div className="w-full h-full flex">
      <Illutration />
      <LoginForm />
    </div>
  );
}

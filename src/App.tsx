import "./App.css";
// import { Input } from "./shared/ui/input/ui/input";
import Input from "./shared/ui/input/ui/input";
import { Modal } from "./shared/ui/modall/ui/modall";
import { Button } from "./shared/ui/button/ui/button";
function App() {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <Input
      name="username"
      control={control}
      rules={{ required: "Username is required" }}
      errors={errors}
      inputPlaceholder="Enter your username"
    />
    <Input
      name="password"
      control={control}
      rules={{ required: "Password is required" }}
      errors={errors}
      inputPlaceholder="Enter your password"
      inputType="password"
      isPassword
    />
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
      Submit
    </button>
  </form>
  );
}

export default App;

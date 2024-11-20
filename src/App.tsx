import "./App.css";
import { Input } from "./shared/ui/input/ui/input";
import { Modal } from "./shared/ui/modall/ui/modall";
import { Button } from "./shared/ui/button/ui/button";
function App() {
  return (
    <div className="bg-backgorund min-h-dvh text-foreground">
      <Modal isOpen={true}>
        <Button>Sign In</Button>
        <Button size="lg">Sign Up</Button>
        <Input label="Password" placeholder="password" />
        <Input label="Email" placeholder="email" /> 
      </Modal>
      <p className="bg-accent/15 text-accent-foreground">Hello, Trood!</p>
    </div>
  );
}

export default App;

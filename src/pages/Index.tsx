import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Show content after a brief delay for animation
  setTimeout(() => setIsVisible(true), 100);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className={`space-y-8 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="space-y-4">
          <MessageCircle className="w-16 h-16 mx-auto text-primary" />
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Making chatting easy and encrypted for you
          </h1>
        </div>
        
        <div className="space-y-4">
          <Button 
            className="w-full max-w-xs"
            onClick={() => navigate("/signup")}
          >
            Create ID and Password
          </Button>
          <Button 
            variant="outline"
            className="w-full max-w-xs"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
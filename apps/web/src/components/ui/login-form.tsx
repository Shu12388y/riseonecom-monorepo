"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
    businessName: "",
  });

  async function createAccount() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth/signup`,
        userInfo
      );

      if (response.status == 201) {
        setLoading(false);
        window.sessionStorage.setItem("userid", response.data.data);
        router.push("/plans");
      }
    } catch (error: any) {
      if (error.status == 409) {
        alert("Already have account");
        window.sessionStorage.setItem("userid", error.response.data.data);
        router.push("/plans");
      } else {
        console.log(error);
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Get Started with RiseOnEcom</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Sam"
            required
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Bussiness Name</Label>
          <Input
            id="businessname"
            type="text"
            placeholder="Arco.co"
            required
            onChange={(e) =>
              setUserInfo({ ...userInfo, businessName: e.target.value })
            }
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="******"
            required
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
        </div>
        <Button onClick={createAccount} className="w-full">
          {loading ? "Loading... " : "Get Started"}
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a
          href={`${process.env.NEXT_PUBLIC_DOMAIN}`}
          target="_blank"
          className="underline underline-offset-4"
        >
          Sign In
        </a>
      </div>
    </div>
  );
}

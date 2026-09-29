import React from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function LayoutSign() {
  return (
    <section className="flex flex-col gap-y-5">
      <div>
        <img src="" alt="Sign In" />
      </div>
      <div>
        <Field>
          <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
          <Input id="input-demo-api-key" type="password" placeholder="sk-..." />
          <FieldDescription>
            Your API key is encrypted and stored securely.
          </FieldDescription>
        </Field>
      </div>
    </section>
  );
}

export default LayoutSign;

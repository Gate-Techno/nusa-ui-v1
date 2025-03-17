import * as React from "react";
import { Button } from "@/components/ui/button";
import { HeadMetaData } from "@/components/layout/HeadMetaData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, ChevronRight, ExternalLink, Github } from "lucide-react";
import DocsLayout from "@/layouts/DocsLayout";

export default function ButtonPage() {
  return (
    <DocsLayout>
      <HeadMetaData title="Button" />
        <div className="mx-5 space-y-6 pb-10">
          <section className="space-y-3">
            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
              Button
            </h1>
            <p className="text-lg text-muted-foreground">
              A customizable button component with multiple variants and sizes, perfect for actions and interactive elements.
            </p>
          </section>

          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="preview" className="flex-1">Preview</TabsTrigger>
              <TabsTrigger value="code" className="flex-1">Code</TabsTrigger>
              <TabsTrigger value="usage" className="flex-1">Usage</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="pt-4">
              <section className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Variants</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="default">Default</Button>
                      <span className="text-sm text-muted-foreground">Default</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="warning">Warning</Button>
                      <span className="text-sm text-muted-foreground">Warning</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="danger">Danger</Button>
                      <span className="text-sm text-muted-foreground">Danger</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="success">Success</Button>
                      <span className="text-sm text-muted-foreground">Success</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg bg-gray-800">
                      <Button variant="outline">Outline</Button>
                      <span className="text-sm text-muted-foreground">Outline</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="secondary">Secondary</Button>
                      <span className="text-sm text-muted-foreground">Secondary</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="ghost">Ghost</Button>
                      <span className="text-sm text-muted-foreground">Ghost</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="link">Link</Button>
                      <span className="text-sm text-muted-foreground">Link</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="neobrutalism">Neobrutalism</Button>
                      <span className="text-sm text-muted-foreground">Neobrutalism</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Sizes</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button size="sm">Small</Button>
                      <span className="text-sm text-muted-foreground">Small</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button size="default">Default</Button>
                      <span className="text-sm text-muted-foreground">Default</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button size="lg">Large</Button>
                      <span className="text-sm text-muted-foreground">Large</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">With Icons</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button>
                        Next <ArrowRight className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground">Right Icon</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="secondary">
                        <Github className="h-4 w-4" /> GitHub
                      </Button>
                      <span className="text-sm text-muted-foreground">Left Icon</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button variant="outline">
                        <Check className="h-4 w-4" /> Save Changes
                      </Button>
                      <span className="text-sm text-muted-foreground">With Action</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">States</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg">
                      <Button disabled>Disabled</Button>
                      <span className="text-sm text-muted-foreground">Disabled</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 bg-muted/20 rounded-lg bg-gray-800">
                      <Button variant="outline" disabled>Disabled Outline</Button>
                      <span className="text-sm text-muted-foreground">Disabled Outline</span>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="code" className="pt-4">
              <div className="space-y-6">
                <div className="rounded-md bg-muted p-4 relative">
                  <button
                    className="absolute top-2 right-2 p-1 bg-muted-foreground/20 hover:bg-muted-foreground/30 rounded-md text-xs"
                    onClick={() => {
                      navigator.clipboard.writeText(document.querySelector('.code-block').textContent);
                    }}
                  >
                    Copy
                  </button>
                  <div className="max-h-[70vh] overflow-hidden">
                    <pre className="text-sm overflow-auto max-h-full code-block">
                    {`import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-extrabold items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-[#301a6b] relative rounded-[5px] p-2 pl-4 pr-10 shadow-[0px_5px_0px_0px_#301a6b] hover:bg-[#cbb6e9]",
        warning:
          "bg-white text-yellow-400 relative rounded-[5px] p-2 pl-4 pr-10 shadow-[0px_5px_0px_0px_#7a4100] hover:bg-yellow-100",
        danger:
          "bg-white text-red-600 relative rounded-[5px] p-2 pl-4 pr-10 shadow-[0px_5px_0px_0px_#991b1b] hover:bg-red-100",
        success:
          "bg-white text-green-600 relative rounded-[5px] p-2 pl-4 pr-10 shadow-[0px_5px_0px_0px_#166534] hover:bg-green-100",
        outline:
          "bg-[#261c5c]/20 rounded-[5px] border-2 border-white/70 text-white/70 hover:bg-white/20 hover:text-white",
        secondary: "bg-[#5635dc] rounded-[5px] text-white hover:bg-[#4020c2]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neobrutalism:
          "btn-neobrutalism transition-all duration-200 bg-white text-purple-800 relative border-2 border-black rounded-[5px] p-2 pl-4 pr-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };`}
                    </pre>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Usage Examples</h2>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Basic Button</h3>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm">
                        {`import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Click me</Button>;
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Button with Different Variants</h3>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm">
                        {`import { Button } from "@/components/ui/button";

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="neobrutalism">Neobrutalism</Button>
    </div>
  );
}`}
                      </pre>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Button with Icons</h3>
                    <div className="rounded-md bg-muted p-4">
                      <pre className="text-sm">
                        {`import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        Next <ArrowRight className="h-4 w-4" />
      </Button>
      <Button variant="secondary">
        <Github className="h-4 w-4" /> GitHub
      </Button>
    </div>
  );
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="usage" className="pt-4 space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">API Reference</h2>
                <div className="rounded-md bg-muted p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Button Props</h3>
                    <p className="text-sm text-muted-foreground">
                      The Button component extends the HTML button element with the following additional props:
                    </p>
                    <div className="border rounded-md overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="p-3 text-left font-medium">Property</th>
                            <th className="p-3 text-left font-medium">Type</th>
                            <th className="p-3 text-left font-medium">Default</th>
                            <th className="p-3 text-left font-medium">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="p-3 align-top">variant</td>
                            <td className="p-3 align-top text-muted-foreground">
                              <code>default | warning | danger | success | outline | secondary | ghost | link | neobrutalism</code>
                            </td>
                            <td className="p-3 align-top text-muted-foreground">
                              <code>default</code>
                            </td>
                            <td className="p-3 align-top text-muted-foreground">
                              Controls the visual style of the button.
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 align-top">size</td>
                            <td className="p-3 align-top text-muted-foreground">
                              <code>default | sm | lg</code>
                            </td>
                            <td className="p-3 align-top text-muted-foreground">
                              <code>default</code>
                            </td>
                            <td className="p-3 align-top text-muted-foreground">
                              Controls the size of the button.
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 align-top">asChild</td>
                            <td className="p-3 align-top text-muted-foreground">
                              <code>boolean</code>
                            </td>
                            <td className="p-3 align-top text-muted-foreground">
                              <code>false</code>
                            </td>
                            <td className="p-3 align-top text-muted-foreground">
                              When true, the component will render its children as the root element.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Examples</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Link Button</h3>
                  <p className="text-sm text-muted-foreground">
                    You can use the button as a link by setting the asChild prop and nesting an anchor tag.
                  </p>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm">
                      {`import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LinkButton() {
  return (
    <Button asChild>
      <Link href="/dashboard">
        Dashboard <ExternalLink className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  );
}`}
                    </pre>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Form Submit Button</h3>
                  <p className="text-sm text-muted-foreground">
                    Use the button as a form submit button with a loading state.
                  </p>
                  <div className="rounded-md bg-muted p-4">
                    <pre className="text-sm">
                      {`import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function SubmitButton() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    // Submit form data
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  }

  return (
    <Button 
      type="submit" 
      disabled={isLoading}
      onClick={handleSubmit}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
}`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Design Details</h2>
                <div className="bg-muted/20 rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-medium">Shadow and Hover Effects</h3>
                  <p className="text-sm text-muted-foreground">
                    The button variants use shadow effects to create depth. The default, warning, danger, and success variants use a shadow with the corresponding color. The neobrutalism variant uses a black shadow for a distinctive look.
                  </p>

                  <h3 className="text-lg font-medium">3D Button Effect</h3>
                  <p className="text-sm text-muted-foreground">
                    The default button style includes a 3D-like effect with a 5px shadow at the bottom. This creates a tactile, push-button appearance that enhances user interaction feedback.
                  </p>

                  <h3 className="text-lg font-medium">Colors and Accessibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Each button variant uses colors that maintain good contrast ratios for accessibility. The text color is chosen to ensure readability against the background color.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
    </DocsLayout>
  );
}
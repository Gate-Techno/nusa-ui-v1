import * as React from "react";
import { HeadMetaData } from "@/components/layout/HeadMetaData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";
import DocsLayout from "@/layouts/DocsLayout";
// import { Card } from "@/components/ui/card";

export default function TabPage() {
  // Define all available variants
  const variants = ["default", "detached", "outline", "neobrutalism", "pill", "minimal"];
  const sizes = ["default", "sm", "lg"];

  return (
    <DocsLayout>
      <HeadMetaData title="Tab" />
      <div className="mx-5 space-y-6 pb-10">
        <section className="space-y-3">
          <h1 className="scroll-m-20 text-3xl text-white font-bold tracking-tight">
            Tab
          </h1>
          <p className="text-white">
            A customizable tab component with multiple variants and sizes, perfect for organizing content into separate views.
          </p>
        </section>

        {/* Installation Section */}
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">
            Installation
          </h2>
          <div className="bg-gray-800 p-4 rounded-md">
            <pre className="text-gray-100 text-sm overflow-x-auto">
              <code>npm install @radix-ui/react-tabs</code>
            </pre>
          </div>
        </section>

        {/* Usage Section */}
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">
            Usage
          </h2>
          <div className="bg-gray-800 p-4 rounded-md">
            <pre className="text-gray-100 text-sm overflow-x-auto">
              <code>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tab";

export function TabsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
    </Tabs>
  );
}`}</code>
            </pre>
          </div>
        </section>

        {/* Variants Section */}
        <section className="space-y-4">
          <h2 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">
            Variants
          </h2>
          <p className="text-white">
            The tab component comes with multiple style variants to fit different design needs.
          </p>
          
          <Tabs defaultValue="default" className="w-full">
            <TabsList className="w-full mb-6">
              {variants.map((variant) => (
                <TabsTrigger key={variant} value={variant} className="capitalize">
                  {variant}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {variants.map((variant) => (
              <TabsContent key={variant} value={variant} className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-md">
                  <h3 className="text-white text-lg font-medium mb-4">Preview</h3>
                  <div className="bg-gray-700 p-4 rounded-md">
                    <TabVariantPreview variant={variant} />
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-md">
                  <h3 className="text-white text-lg font-medium mb-4">Code</h3>
                  <div className="bg-gray-900 p-4 rounded-md">
                    <pre className="text-gray-100 text-sm overflow-x-auto">
                      <code>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tab";

export function TabsExample() {
  return (
    <Tabs defaultValue="account" variant="${variant}">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
      <TabsContent value="settings">App settings</TabsContent>
    </Tabs>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Sizes Section */}
        <section className="space-y-4">
          <h2 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">
            Sizes
          </h2>
          <p className="text-white">
            The tab component supports different sizes to accommodate various layouts.
          </p>
          
          <Tabs defaultValue="default" className="w-full">
            <TabsList className="w-full mb-6">
              {sizes.map((size) => (
                <TabsTrigger key={size} value={size} className="capitalize">
                  {size}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {sizes.map((size) => (
              <TabsContent key={size} value={size} className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-md">
                  <h3 className="text-white text-lg font-medium mb-4">Preview</h3>
                  <div className="bg-gray-700 p-4 rounded-md">
                    <TabSizePreview size={size} />
                  </div>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-md">
                  <h3 className="text-white text-lg font-medium mb-4">Code</h3>
                  <div className="bg-gray-900 p-4 rounded-md">
                    <pre className="text-gray-100 text-sm overflow-x-auto">
                      <code>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tab";

export function TabsExample() {
  return (
    <Tabs defaultValue="account" size="${size}">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings</TabsContent>
      <TabsContent value="password">Password settings</TabsContent>
      <TabsContent value="settings">App settings</TabsContent>
    </Tabs>
  );
}`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* API Reference Section */}
        <section className="space-y-4">
          <h2 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">
            API Reference
          </h2>
          
          <div className="bg-gray-800 p-6 rounded-md">
            <h3 className="text-white text-lg font-medium mb-4">Tabs</h3>
            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-4">Prop</th>
                  <th className="text-left py-2 px-4">Type</th>
                  <th className="text-left py-2 px-4">Default</th>
                  <th className="text-left py-2 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-4 font-mono text-sm">variant</td>
                  <td className="py-2 px-4 font-mono text-sm">string</td>
                  <td className="py-2 px-4 font-mono text-sm">"default"</td>
                  <td className="py-2 px-4">Variant style: "default", "detached", "outline", "neobrutalism", "pill", "minimal"</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-4 font-mono text-sm">size</td>
                  <td className="py-2 px-4 font-mono text-sm">string</td>
                  <td className="py-2 px-4 font-mono text-sm">"default"</td>
                  <td className="py-2 px-4">Size of the component: "default", "sm", "lg"</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 px-4 font-mono text-sm">defaultValue</td>
                  <td className="py-2 px-4 font-mono text-sm">string</td>
                  <td className="py-2 px-4 font-mono text-sm">undefined</td>
                  <td className="py-2 px-4">The value of the tab that should be active when initially rendered</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-mono text-sm">value</td>
                  <td className="py-2 px-4 font-mono text-sm">string</td>
                  <td className="py-2 px-4 font-mono text-sm">undefined</td>
                  <td className="py-2 px-4">The controlled value of the tab to activate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section className="space-y-4">
          <h2 className="scroll-m-20 text-2xl text-white font-semibold tracking-tight">
            Examples
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-md">
              <h3 className="text-white text-lg font-medium mb-4">Full Width Tabs</h3>
              <div className="bg-gray-700 p-4 rounded-md">
                <Tabs defaultValue="tab1">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="bg-gray-600 p-4 rounded-md mt-2">
                    <p className="text-white">Content for Tab 1</p>
                  </TabsContent>
                  <TabsContent value="tab2" className="bg-gray-600 p-4 rounded-md mt-2">
                    <p className="text-white">Content for Tab 2</p>
                  </TabsContent>
                  <TabsContent value="tab3" className="bg-gray-600 p-4 rounded-md mt-2">
                    <p className="text-white">Content for Tab 3</p>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="bg-gray-900 p-4 rounded-md mt-4">
                <pre className="text-gray-100 text-sm overflow-x-auto">
                  <code>{`<Tabs defaultValue="tab1">
  <TabsList className="w-full grid grid-cols-3">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab 1</TabsContent>
  <TabsContent value="tab2">Content for Tab 2</TabsContent>
  <TabsContent value="tab3">Content for Tab 3</TabsContent>
</Tabs>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}

// Helper component to display tab variant previews
const TabVariantPreview = ({ variant }) => {
  return (
    <Tabs defaultValue="account" variant={variant} className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="bg-gray-600 p-4 rounded-md mt-2">
        <p className="text-white">Account settings content</p>
      </TabsContent>
      <TabsContent value="password" className="bg-gray-600 p-4 rounded-md mt-2">
        <p className="text-white">Password settings content</p>
      </TabsContent>
      <TabsContent value="settings" className="bg-gray-600 p-4 rounded-md mt-2">
        <p className="text-white">Application settings content</p>
      </TabsContent>
    </Tabs>
  );
};

// Helper component to display tab size previews
const TabSizePreview = ({ size }) => {
  return (
    <Tabs defaultValue="account" size={size} className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="bg-gray-600 p-4 rounded-md mt-2">
        <p className="text-white">Account settings content</p>
      </TabsContent>
      <TabsContent value="password" className="bg-gray-600 p-4 rounded-md mt-2">
        <p className="text-white">Password settings content</p>
      </TabsContent>
      <TabsContent value="settings" className="bg-gray-600 p-4 rounded-md mt-2">
        <p className="text-white">Application settings content</p>
      </TabsContent>
    </Tabs>
  );
};
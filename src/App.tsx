import {
  LogInIcon,
  BadgeDollarSignIcon,
  LandmarkIcon,
  MoreHorizontalIcon,
  MoveRightIcon,
} from "lucide-react";

import {buttonVariants} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Icons} from "@/components/icons";

import {cn} from "@/lib/utils";

function PaymentCard() {
  return (
    <Card>
      <CardContent className="mt-6 grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <a
            href="https://www.josephchow.dev"
            className={cn(buttonVariants(), "")}
          >
            <Icons.apple className="mr-1 h-4 w-4" />
            Pay
          </a>
          <a
            href="https://www.josephchow.dev"
            className={cn(buttonVariants({variant: "outline"}), "")}
          >
            <Icons.google className="mr-1 h-4 w-4" />
            Pay
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or pay another way
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup defaultValue="card" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Label
            htmlFor="card"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="card" id="card" className="sr-only" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mb-3 h-6 w-6"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
            Card
          </Label>
          <Label
            htmlFor="bank"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="bank" id="bank" className="sr-only" />
            <LandmarkIcon className="mb-3 h-6 w-6" />
            Bank Transfer
          </Label>
          <Label
            htmlFor="crypto"
            className="flex flex-col items-center justify-between whitespace-nowrap rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="crypto" id="crypto" className="sr-only" />
            <BadgeDollarSignIcon className="mb-3 h-6 w-6" />
            Digital Currency
          </Label>
          <Label
            htmlFor="other"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
          >
            <RadioGroupItem value="other" id="other" className="sr-only" />
            <MoreHorizontalIcon className="mb-3 h-6 w-6" />
            Other
          </Label>
        </RadioGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name on card</Label>
            <Input id="name" placeholder="First Last" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="555-555-5555" />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="number">Card number</Label>
          <Input id="number" placeholder="" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="zip">Zip/PostalCode</Label>
            <Input id="zip" placeholder="91210" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country">Country or region</Label>
            <Select>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="usa">USA</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="month">Expires</Label>
            <Select>
              <SelectTrigger id="month">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">January</SelectItem>
                <SelectItem value="2">February</SelectItem>
                <SelectItem value="3">March</SelectItem>
                <SelectItem value="4">April</SelectItem>
                <SelectItem value="5">May</SelectItem>
                <SelectItem value="6">June</SelectItem>
                <SelectItem value="7">July</SelectItem>
                <SelectItem value="8">August</SelectItem>
                <SelectItem value="9">September</SelectItem>
                <SelectItem value="10">October</SelectItem>
                <SelectItem value="11">November</SelectItem>
                <SelectItem value="12">December</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="year">Year</Label>
            <Select>
              <SelectTrigger id="year">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({length: 10}, (_, i) => (
                  <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <a
            href="https://www.josephchow.dev"
            className={cn(buttonVariants(), "w-full bg-violet-400 hover:bg-violet-500")}
          >
            Continue
            <LogInIcon className="ml-2 h-6 w-6" />
          </a>
      </CardFooter>
    </Card>
  );
}

export function App() {
  return (
    <>
      <main className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <aside className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-teal-500" />
          <a
          href="https://www.josephchow.dev"
          className={cn(
            buttonVariants({variant: "ghost"}),
            "absolute right-4 top-4 md:right-8 md:top-8 hidden md:flex hover:bg-transparent hover:text-white dark:hover:text-white dark:hover:bg-transparent"
          )}
        >
          Go back
          <MoveRightIcon className="ml-2 h-6 w-6" />
        </a>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            CakeCapital
          </div>
          <div className="relative z-20 mb-auto mt-auto">
            <blockquote className="space-y-8">
              <header>
                <h1 className="mb-2 text-4xl font-extrabold">$500.00</h1>
                <p className="text-md">
                  <strong>Due: </strong>July 21, 2023
                </p>
              </header>

              <footer>
                <p className="text-md">
                  <strong>From: </strong> Togethere Inc.
                </p>
                <p className="text-md">
                  <strong>InvoiceNo: </strong> 17AB5E5A-9015
                </p>
              </footer>
            </blockquote>
          </div>
        </aside>
        <article className="lg:p-8 mb-4 md:mb-0">
          <section className="mx-auto flex w-full flex-col justify-center space-y-6 sm:max-w-screen-sm">
            <PaymentCard />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="https://www.josephchow.dev"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://www.josephchow.dev"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </article>
      </main>
    </>
  );
}

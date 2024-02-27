import { db } from "@/server/db";
import { posts } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default async function HomePage() {
  const allPost = await db.select().from(posts);

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
        <CardDescription>Enter your information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input id="quantity" placeholder="Enter your email" type="number" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="ml-auto" type="submit">
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
}

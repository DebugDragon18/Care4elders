import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { Pill, ShoppingCart, Carrot } from 'lucide-react';

const medicines = [
  { name: 'Aspirin 81mg', price: '₹499', image: 'https://placehold.co/200x200.png', hint: 'pills medicine' },
  { name: 'Ibuprofen 200mg', price: '₹699', image: 'https://placehold.co/200x200.png', hint: 'pills headache' },
  { name: 'Multivitamins', price: '₹1099', image: 'https://placehold.co/200x200.png', hint: 'vitamins supplements' },
  { name: 'Calcium Tablets', price: '₹849', image: 'https://placehold.co/200x200.png', hint: 'vitamins bones' },
];

const groceries = [
  { name: 'Milk', price: '₹299', image: 'https://placehold.co/200x200.png', hint: 'milk dairy' },
  { name: 'Bread', price: '₹249', image: 'https://placehold.co/200x200.png', hint: 'bread bakery' },
  { name: 'Eggs', price: '₹359', image: 'https://placehold.co/200x200.png', hint: 'eggs breakfast' },
  { name: 'Bananas', price: '₹169', image: 'https://placehold.co/200x200.png', hint: 'bananas fruit' },
];

const ProductCard = ({ name, price, image, hint }: { name: string, price: string, image: string, hint: string }) => (
  <Card>
    <CardHeader className="p-0">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        data-ai-hint={hint}
        className="w-full h-32 object-cover rounded-t-lg"
      />
    </CardHeader>
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-md text-muted-foreground">{price}</p>
    </CardContent>
    <CardFooter className="p-4 pt-0">
      <Button className="w-full text-md h-11">Add to Cart</Button>
    </CardFooter>
  </Card>
);

export default function OrderingPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-3">
        <ShoppingCart className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">Order Essentials</h1>
          <p className="text-lg text-muted-foreground">
            Get medicines and groceries delivered to your door.
          </p>
        </div>
      </header>

      <Tabs defaultValue="medicines" className="w-full">
        <TabsList className="grid w-full grid-cols-2 h-14">
          <TabsTrigger value="medicines" className="text-lg h-12">
            <Pill className="mr-2" /> Medicines
          </TabsTrigger>
          <TabsTrigger value="groceries" className="text-lg h-12">
            <Carrot className="mr-2" /> Groceries
          </TabsTrigger>
        </TabsList>
        <TabsContent value="medicines" className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {medicines.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="groceries" className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {groceries.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

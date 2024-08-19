import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Archive, DollarSign, Percent, Tag, Users } from "lucide-react";
import { ChartOverView } from "./_components/chartOverView";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
     <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
         <div className="flex items-center">
          <CardTitle className="text-lg sm:text-xl text-zinc-800 select-none">
            Total de vendas
          </CardTitle>
          <DollarSign className="size-4 ml-auto"/>
         </div>
         <CardDescription>
          Total de vendas em 90 dias
         </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-base sm:text-lg font-bold">
            R$40.000
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
         <div className="flex items-center">
          <CardTitle className="text-lg sm:text-xl text-zinc-800 select-none">
            Estoque
          </CardTitle>
          <Archive className="size-4 ml-auto"/>
         </div>
         <CardDescription>
          Quantidade armazenada no estoque
         </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-base sm:text-lg font-bold">
            5.425
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
         <div className="flex items-center">
          <CardTitle className="text-lg sm:text-xl text-zinc-800 select-none">
            Novos clientes
          </CardTitle>
          <Users className="size-4 ml-auto"/>
         </div>
         <CardDescription>
          Novos clientes em 90 dias
         </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-base sm:text-lg font-bold text-green-500">
            +256
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
         <div className="flex items-center">
          <CardTitle className="text-lg sm:text-xl text-zinc-800 select-none">
            Total de pedidos hoje
          </CardTitle>
          <Tag className="size-4 ml-auto"/>
         </div>
         <CardDescription>
          Total de vendas do dia
         </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-base sm:text-lg font-bold">
            65
          </p>
        </CardContent>
      </Card>
     </section>

     <section className="mt-4 flex flex-col md:flex-row gap-4">
      <ChartOverView />
     </section>

    </main>

  );
}

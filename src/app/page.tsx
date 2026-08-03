import Button from "@/components/ui/Button";
import StatCard from "@/components/ui/StatCard";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/ui/PageHeader";

import { Users, Calendar, Apple, MessageCircle } from "lucide-react";

export default function Home(){
  return(
    <MainLayout>
      <div className="mx-auto max-w-5xl">
      <PageHeader
        title="Pacientes"
        description="Gestiona todos tus pacientes"
        />

      <Button>Comenzar</Button>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <StatCard
          title="Pacientes"
          value={0}
          icon={<Users size={28}/>}
          />

          <StatCard
          title="Citas de hoy"
          value={0}
          icon={<Calendar size={28}/>}
          />

          <StatCard
          title="Dietas"
          value={0}
          icon={<Apple size={28}/>}
          />

          <StatCard
          title="Mensajes"
          value={0}
          icon={<MessageCircle size={28}/>}
          />
        </div>
      </div>
    </MainLayout>
  );
}
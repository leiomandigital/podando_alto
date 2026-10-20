import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { MembroEquipeTecnica } from "@/content/site.types";
import { getInitials } from "@/lib/format";

interface TechnicalTeamProps {
  title: string;
  members: MembroEquipeTecnica[];
}

const TechnicalTeam = ({ title, members }: TechnicalTeamProps) => (
  <div className="mt-12">
    <h3 className="mb-4 text-xl text-primary">{title}</h3>
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {members.map((member) => (
        <li key={member.id}>
          <Card className="h-full">
            <CardHeader className="flex-row items-center gap-4">
              <Avatar className="size-14">
                <AvatarFallback aria-hidden="true">{getInitials(member.nome)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1">
                <CardTitle>{member.nome}</CardTitle>
                <p className="text-sm font-semibold text-primary">{member.titulo}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">{member.descricao}</p>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  </div>
);

export { TechnicalTeam };

import Card from "@/components/Card";
import CardSubtitle from "@/components/CardSubtitle";
import CardTitle from "@/components/CardTitle";
import ImpactGraph from "@/components/ImpactGraph";
import SectionInfo from "@/components/SectionInfo";
import SectionsMap from "@/components/SectionsMap";

export default async function Home() {
  return (
    <main className="flex flex-col grow gap-4">
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <section className="grid grid-cols-4 gap-4">
        <Card colSpan={2}>
          <CardTitle>Impacto na População</CardTitle>
          <CardSubtitle>
            Visualização de como a catastrofe ainda está impactando a população
          </CardSubtitle>
          <ImpactGraph />
        </Card>
        <Card>
          <CardTitle>Umidade</CardTitle>
          <CardSubtitle>
            Umidade capturada da região ao longo do tempo
          </CardSubtitle>
        </Card>
        <Card>
          <CardTitle>Temperatura</CardTitle>
          <CardSubtitle>
            Temperatura capturada da região ao longo do tempo
          </CardSubtitle>
        </Card>
        <Card>
          <CardTitle>Informações da Seção</CardTitle>
          <CardSubtitle>
            Mais informações da seção selecionada no mapa
          </CardSubtitle>
          <SectionInfo />
        </Card>
        <Card colSpan={3}>
          <CardTitle>Mapa da Região</CardTitle>
          <CardSubtitle>
            Visualização de setores na região e suas informações
          </CardSubtitle>
          <SectionsMap />
        </Card>
      </section>
    </main>
  );
}

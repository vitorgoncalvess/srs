import Card from "@/components/Card";
import CardSubtitle from "@/components/CardSubtitle";
import CardTitle from "@/components/CardTitle";
import ImpactGraph from "@/components/ImpactGraph";
import SectionInfo from "@/components/SectionInfo";
import SectionsMap from "@/components/SectionsMap";
import instance from "@/utils/axiosConfig";

const getTempAndUmid = async () => {
  try {
    const response = await instance.get(`/geral`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    return null;
  }
};

export default async function Home() {
  const data = await getTempAndUmid();
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
          <div className="flex items-center justify-start gap-4 h-full py-4">
            <div className="h-full w-2 bg-zinc-500 rounded flex items-end">
              <div
                className="w-full bg-green-400 rounded"
                style={{
                  height: `${Number(data[1].average_value)}%`,
                }}
              ></div>
            </div>
            <h1 className="text-4xl font-semibold">
              {data
                ? Number(data[1]?.average_value)?.toFixed(2) + "%"
                : "Nenhum dado capturado."}
            </h1>
          </div>
        </Card>
        <Card>
          <CardTitle>Temperatura</CardTitle>
          <CardSubtitle>
            Temperatura capturada da região ao longo do tempo
          </CardSubtitle>
          <div className="flex items-center justify-start gap-4 h-full py-4">
            <div className="h-full w-2 bg-zinc-500 rounded flex items-end">
              <div
                className="w-full bg-green-400 rounded"
                style={{
                  height: `${(Number(data[0].average_value) / 40) * 100}%`,
                }}
              ></div>
            </div>
            <h1 className="text-4xl font-semibold">
              {data
                ? Number(data[0]?.average_value)?.toFixed(2) + "°C"
                : "Nenhum dado capturado."}
            </h1>
          </div>
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

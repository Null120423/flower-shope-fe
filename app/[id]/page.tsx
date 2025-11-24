import DetailView from "@/components/pages/detail";

interface Props {
  params: Promise<{ id: string }>;
}

async function DetailPage({ params }: Props) {
  return (
    <DetailView
      params={{
        id: (await params).id,
      }}
    />
  );
}

export default DetailPage;

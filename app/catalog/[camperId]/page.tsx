import type { Metadata } from "next";
import { fetchCamperById } from "@/lib/api/campers";
import CamperDetailsClient from "./CamperDetailsClient";

type Props = {
  params: Promise<{ camperId: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await fetchCamperById(camperId);

    return {
      title: `${camper.name} — TravelTrucks`,
      description: camper.description,
    };
  } catch {
    return {
      title: "Camper not found",
    };
  }
}

export default async function Page({ params }: Props) {
  const { camperId } = await params;

  return <CamperDetailsClient camperId={camperId} />;
}
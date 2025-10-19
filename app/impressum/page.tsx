import { Metadata } from "next";
import ImpressumComponent from "@/components/landing/impressum";

export const metadata: Metadata = {
  title: "Impressum – QuasselBot",
  description: "Impressum der Website QuasselBot",
};

export default function ImpressumPage() {
  return <ImpressumComponent />;
}

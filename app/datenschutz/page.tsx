import { Metadata } from "next";
import DatenschutzComponent from "@/components/landing/datenschutz";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – QuasselBot",
  description: "Datenschutzerklärung für QuasselBot",
};

export default function DatenschutzPage() {
  return <DatenschutzComponent />;
}

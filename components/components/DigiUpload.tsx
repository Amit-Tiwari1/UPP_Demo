import { Button } from "@nextui-org/button";
import React from "react";

type Props = {
  documentEng: String;
  documentHindi: String;
};

const DigiUpload = ({ documentEng, documentHindi }: Props) => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
      <div className="Col md:text-sm">
        <p>{documentEng}</p>
        <p>{documentHindi}</p>
      </div>
      <div className="Col flex flex-col md:flex-row items-center gap-2 md:gap-5">
        <Button variant="bordered" className="text-slate-500 rounded-md">
          Select file
          <span className="material-symbols-rounded ms-12">upload_file</span>
        </Button>
        <span>or</span>
        <Button className="bg-black text-white">Upload by digilocker</Button>
      </div>
    </div>
  );
};

export default DigiUpload;

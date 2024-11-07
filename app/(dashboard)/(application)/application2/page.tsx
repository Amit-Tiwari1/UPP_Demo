"use client";
import { Input } from "@nextui-org/input";
import {
  Accordion,
  AccordionItem,
  Button,
  DatePicker,
  Select,
  SelectItem,
} from "@nextui-org/react";

export default function page() {
  return (
    <div className="registration_form_wrapper lg:mx-[150px]">
      <div className="border border-slate-300 rounded-3xl px-4 md:px-8 py-6 md:py-10 mb-8 bg-white">
        <h1 className="font-semibold text-xl md:text-3xl">
          Other Details अन्य विवरण
        </h1>
        <p className="text-slate-500 text-sm md:text-md my-3 md:my-5">
          Clearly fill the form below. Fields marked with * are mandatory to
          fill:
        </p>
        <p className="text-slate-500 text-sm md:text-md">
          नीचे दिए गए फॉर्म को स्पष्ट रूप से भरें, * से चिह्नित फ़ील्ड भरना
          अनिवार्य है:
        </p>

        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:mt-8 pt-8 gap-5 md:gap-8">
            <Accordion selectionMode="multiple" className="col-span-3 px-0">
              <AccordionItem
                key="1"
                aria-label="Section 1 खंड 1"
                title={
                  <p className="md:text-xl font-semibold">Section 1 खंड 1</p>
                }
              >
                <div className="w-full flex flex-col gap-5 md:gap-8 py-8">
                  <Select
                    items={[
                      {
                        value: "1",
                        name: "1",
                      },
                      {
                        value: "2",
                        name: "2",
                      },
                      {
                        value: "3",
                        name: "3",
                      },
                    ]}
                    label="Are you domicile of Uttar Pradesh? क्या आप उत्तर प्रदेश के मूल निवासी हैं?"
                    labelPlacement="outside"
                    placeholder="Select"
                    isRequired
                    variant="bordered"
                    radius="sm"
                    className="md:col-span-3"
                  >
                    {(option: any) => (
                      <SelectItem key={option?.value}>
                        {option?.name}
                      </SelectItem>
                    )}
                  </Select>
                  <div className="mt-11 md:mt-0">
                    <Input
                      type="text"
                      label="Name of Domicile certificate issuing authority. मूल निवास प्रमाणपत्र जारी करने वाले राज्य प्राधिकारी का नाम"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="Enter name of Domicile certificate issuing UP state authority "
                      isRequired
                    />
                  </div>
                  <DatePicker
                    className="md:col-span-3"
                    label="Date of issuing Domicile certificate. मूल निवास प्रमाणपत्र जारी करने की तिथि"
                    labelPlacement="outside"
                    radius="sm"
                    variant="bordered"
                    isRequired
                  />
                  <div className="mt-6 md:mt-0 md:col-span-3">
                    <Input
                      type="text"
                      label="Domicile certificate serial number. मूल निवास प्रमाणपत्र क्रमांक"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="Enter certificate serial number."
                      isRequired
                      endContent={
                        <span className="material-symbols-rounded">
                          credit_card
                        </span>
                      }
                    />
                  </div>
                  <div className="mt-11 md:mt-0 md:col-span-3">
                    <Input
                      type="text"
                      label="Domicile certificate application number. मूल निवास प्रमाणपत्र आवेदन संख्या"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="Enter certificate application number"
                      isRequired
                      endContent={
                        <span className="material-symbols-rounded">
                          credit_card
                        </span>
                      }
                    />
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Section 2 खंड 2"
                title={
                  <p className="md:text-xl font-semibold">Section 2 खंड 2</p>
                }
              >
                <div className="w-full flex flex-col gap-5 md:gap-8 py-8">
                  <div className="md:col-span-3 mt-5 md:mt-0">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Are you a member of Scheduled Caste  (SC / ST /OBC)? क्या आप अनुसूचित जाति (एससी/एसटी/ओबीसी) के सदस्य हैं?"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>

                  <div className="md:col-span-3 mt-16 md:mt-0">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Select the category of Scheduled Caste  (SC / ST /OBC)? अनुसूचित जाति (एससी / एसटी / ओबीसी) की श्रेणी का चयन करें?"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>

                  <div className="md:col-span-3 mt-11 md:mt-0">
                    <Input
                      type="text"
                      label="Name of Category certificate issuing authority. श्रेणी प्रमाणपत्र जारी करने वाले प्राधिकारी का नाम"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="Enter name of Category certificate issuing authority"
                      isRequired
                    />
                  </div>

                  <DatePicker
                    className="md:col-span-3"
                    label="Date of issuing Category certificate. श्रेणी प्रमाणपत्र जारी करने की तिथि"
                    labelPlacement="outside"
                    radius="sm"
                    variant="bordered"
                    isRequired
                  />
                  <div className="md:col-span-3 mt-6 md:mt-0">
                    <Input
                      className="md:col-span-3"
                      type="text"
                      label="Category certificate serial number. श्रेणी प्रमाणपत्र क्रमांक"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="Enter certificate serial number."
                      isRequired
                      endContent={
                        <span className="material-symbols-rounded">
                          credit_card
                        </span>
                      }
                    />
                  </div>

                  <div className="md:col-span-3 mt-6 md:mt-0">
                    <Input
                      type="text"
                      label="Category certificate application number. श्रेणी प्रमाणपत्र आवेदन संख्या"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="Enter Category certificate application number."
                      isRequired
                      endContent={
                        <span className="material-symbols-rounded">
                          credit_card
                        </span>
                      }
                    />
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Section 3 खंड 3"
                title={
                  <p className="md:text-xl font-semibold">Section 3 खंड 3</p>
                }
              >
                <div className="w-full flex flex-col gap-5 md:gap-8 py-8">
                  <div className="md:col-span-3 mt-5 md:mt-0">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Are you a member of the Economically Weaker Section (EWS)? क्या आप आर्थिक रूप से कमजोर वर्ग (EWS) के सदस्य हैं?"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                      className="md:col-span-3"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <div className="md:col-span-3 mt-11 md:mt-0">
                    <Input
                      type="text"
                      label="Name of EWS certificate issuing authority. EWS प्रमाणपत्र जारी करने वाले प्राधिकारी का नाम"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="Enter name of EWS certificate issuing authority"
                      isRequired
                    />
                  </div>

                  <DatePicker
                    className="md:col-span-3"
                    label="Date of issuing EWS certificate. EWS प्रमाणपत्र जारी करने की तिथि"
                    labelPlacement="outside"
                    radius="sm"
                    variant="bordered"
                    isRequired
                  />

                  <div className="md:col-span-3 mt-6 md:mt-0">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Validity of the EWS certificate (in years). EWS प्रमाण पत्र की वैधता (वर्षों में)"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                      className="md:col-span-3"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <div className="md:col-span-3 mt-6 md:mt-0">
                    <Input
                      type="text"
                      label="EWS certificate number. EWS प्रमाणपत्र संख्या"
                      labelPlacement="outside"
                      variant="bordered"
                      radius="sm"
                      placeholder="Enter EWS certificate number."
                      isRequired
                      className="md:col-span-3"
                      endContent={
                        <span className="material-symbols-rounded">
                          credit_card
                        </span>
                      }
                    />
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                key="4"
                aria-label="Section 4 खंड 4"
                title={
                  <p className="md:text-xl font-semibold">Section 4 खंड 4</p>
                }
              >
                <div className="w-full flex flex-col gap-8 py-8">
                  <div className="md:col-span-3 mt-5 md:mt-0">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Are you dependent of Freedom Fighter? क्या आप स्वतंत्रता संग्राम सेनानी के आश्रित हैं?"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                      className="md:col-span-3"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <div className="md:col-span-3 mt-14 md:mt-6">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Are you a UP government employee and having required certificate?  क्या आप उत्तर प्रदेश सरकार के कर्मचारी हैं और आपके पास आवश्यक प्रमाणपत्र है?"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <div className="md:col-span-3 mt-4 md:mt-0">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Are you an Ex-Serviceman? क्या आप भूतपूर्व सैनिक हैं?"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                      className="md:col-span-3"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                  <div className="md:col-span-3 mt-14 md:mt-6">
                    <Select
                      items={[
                        {
                          value: "1",
                          name: "1",
                        },
                        {
                          value: "2",
                          name: "2",
                        },
                        {
                          value: "3",
                          name: "3",
                        },
                      ]}
                      label="Have you served in the territorial army for a minimum period of 2 years? क्या आपने प्रादेशिक सेना में न्यूनतम 2 वर्ष तक की सेवा की है?"
                      labelPlacement="outside"
                      placeholder="Select"
                      isRequired
                      variant="bordered"
                      radius="sm"
                      className="md:col-span-3"
                    >
                      {(option: any) => (
                        <SelectItem key={option?.value}>
                          {option?.name}
                        </SelectItem>
                      )}
                    </Select>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex justify-between gap-4 mt-8">
            <Button
              type="submit"
              variant="bordered"
              className="w-full max-w-[300px]"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="bg-black text-white w-full max-w-[300px]"
            >
              Save & Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

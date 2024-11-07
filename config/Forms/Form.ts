import { DateValue } from "@nextui-org/react";

export interface CandidateRegistrationForm {
    firstName?: string;
    middleName:string;
    lastName?: string;
    fullName?: string;
    gender?: string;
    dateOfBirth?: DateValue | null | string;
    fatherName?: string;
    fatherTitle?: string;
    motherTitle?: string;
    motherName?: string;
    maritalStatus?: string;
    domicile?: string;
    reservationCategory?: string;
    email?: string;
    mobileNumber?: string;
}
interface Subject {
    subjectName: string;
    subjectCode?: string;
  }
  
  interface BasicEducationDetails {
    isEquivalent: boolean;
    boardName: string;
    rollNumber: string;
    certificateNumber: string;
    yearOfPassing: string;
    percentage?: number;
    CGPA?: number;
    subjects: Subject[];
  }
  
  export interface CandidateEducationQualificationForm {
    tenthDetails: BasicEducationDetails;
    twelfthDetails: BasicEducationDetails;
    graduationDetails: BasicEducationDetails;
    postGraduationDetails: BasicEducationDetails;
  }
  
export const buildPayload = (data) => ({
  studentInformation: {
    studentPhoto: data.studentPhoto,
    studentName: data.studentName,
    studentPhone: data.studentPhone,
    studentAltPhone: data.studentAltPhone,
    studentDob: data.studentDob,
    studentPresentAddress: data.studentPresentAddress,
    studentFatherPhone: data.studentFatherPhone,
    studentMotherPhone: data.studentMotherPhone,
  },

  sponsorInformation: {
    sponsorPhoto: data.sponsorPhoto,
    sponsorName: data.sponsorName,
    sponsorFatherName: data.sponsorFatherName,
    sponsorMotherName: data.sponsorMotherName,
    sponsorBusinessName: data.sponsorBusinessName,
    sponsorBusinessCategory: data.sponsorBusinessCategory,
    sponsorNidNumber: data.sponsorNidNumber,
  },

  familyInformation: [
    {
      relation: "Father",
      name: data.fatherName,
      dob: data.fatherDob,
      occupation: data.fatherOccupation,
    },
    {
      relation: "Mother",
      name: data.motherName,
      dob: data.motherDob,
      occupation: data.motherOccupation,
    },
    {
      relation: data.siblingRelationship,
      name: data.siblingName,
      dob: data.siblingDob,
      occupation: data.siblingOccupation,
    },
  ].filter((item) => item.name),

  educationalHistory: [
    {
      level: "Primary",
      schoolName: data.primarySchoolName,
      address: data.primarySchoolAddress,
      passingYear: data.primaryPassingYear,
    },
    {
      level: "Secondary",
      schoolName: data.secondarySchoolName,
      address: data.secondarySchoolAddress,
      passingYear: data.secondaryPassingYear,
    },
    {
      level: "Higher Secondary",
      schoolName: data.higherSecondarySchoolName,
      address: data.higherSecondarySchoolAddress,
      passingYear: data.higherSecondaryPassingYear,
    },
    {
      level: "Honours",
      schoolName: data.honoursSchoolName,
      address: data.honoursSchoolAddress,
      passingYear: data.honoursPassingYear,
    },
    {
      level: "Masters",
      schoolName: data.mastersSchoolName,
      address: data.mastersSchoolAddress,
      passingYear: data.mastersPassingYear,
    },
  ].filter((item) => item.schoolName),

  currentEducation: {
    universityName: data.currentUniversityName,
    department: data.currentDepartment,
    course: data.currentCourse,
    semester: data.currentSemester,
    registration: data.currentRegistration,
    roll: data.currentRoll,
  },

  japaneseLanguageTests: [
    {
      exam: "JLPT",
      level: data.JLPTLevel,
      rollNumber: data.JLPTRollNumber,
      score: data.JLPTScore,
      examDate: data.JLPTExamDate,
      expectedExamDate: data.JLPTExpectedExamDate,
    },
    {
      exam: "NAT",
      level: data.NATLevel,
      rollNumber: data.NATRollNumber,
      score: data.NATScore,
      examDate: data.NATExamDate,
      expectedExamDate: data.NATExpectedExamDate,
    },
    {
      exam: "JPT",
      level: data.JPTLevel,
      rollNumber: data.JPTRollNumber,
      score: data.JPTScore,
      examDate: data.JPTExamDate,
      expectedExamDate: data.JPTExpectedExamDate,
    },
    {
      exam: "JLCT",
      level: data.JLCTLevel,
      rollNumber: data.JLCTRollNumber,
      score: data.JLCTScore,
      examDate: data.JLCTExamDate,
      expectedExamDate: data.JLCTExpectedExamDate,
    },
  ].filter(
    (item) =>
      item.rollNumber || item.score || item.examDate || item.expectedExamDate,
  ),
});

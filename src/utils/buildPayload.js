const safeToUpper = (str) => (str ? String(str).toUpperCase() : "");

export const buildPayload = (data) => ({
  // =====================================================
  // STUDENT INFORMATION
  // =====================================================

  studentInformation: {
    studentPhoto: data.studentPhoto,

    studentName: safeToUpper(data.studentName),

    studentPhone: data.studentPhone,

    studentAltPhone: data.studentAltPhone,

    studentDob: data.studentDob,

    studentPresentAddress: safeToUpper(data.studentPresentAddress),

    studentFatherPhone: data.studentFatherPhone,

    studentMotherPhone: data.studentMotherPhone,
  },

  // =====================================================
  // SPONSOR INFORMATION
  // =====================================================

  sponsorInformation: {
    sponsorPhoto: data.sponsorPhoto,

    sponsorName: safeToUpper(data.sponsorName),

    sponsorFatherName: safeToUpper(data.sponsorFatherName),

    sponsorMotherName: safeToUpper(data.sponsorMotherName),

    sponsorBusinessName: safeToUpper(data.sponsorBusinessName),

    sponsorBusinessCategory: safeToUpper(data.sponsorBusinessCategory),

    sponsorNidNumber: data.sponsorNidNumber,
  },

  // =====================================================
  // FAMILY INFORMATION
  // =====================================================

  familyInformation: [
    {
      relation: "Father",
      name: safeToUpper(data.fatherName),
      dob: data.fatherDob,
      occupation: safeToUpper(data.fatherOccupation),
    },

    {
      relation: "Mother",
      name: safeToUpper(data.motherName),
      dob: data.motherDob,
      occupation: safeToUpper(data.motherOccupation),
    },

    {
      relation: safeToUpper(data.siblingRelationship),
      name: safeToUpper(data.siblingName),
      dob: data.siblingDob,
      occupation: safeToUpper(data.siblingOccupation),
    },
  ].filter((item) => item.name),

  // =====================================================
  // EDUCATIONAL HISTORY
  // =====================================================

  educationalHistory: [
    {
      level: "Primary",

      schoolName: safeToUpper(data.primarySchoolName),

      address: safeToUpper(data.primarySchoolAddress),

      passingYear: safeToUpper(data.primaryPassingYear),
    },

    {
      level: "Secondary",

      schoolName: safeToUpper(data.secondarySchoolName),

      address: safeToUpper(data.secondarySchoolAddress),

      passingYear: safeToUpper(data.secondaryPassingYear),
    },

    {
      level: "Higher Secondary",

      schoolName: safeToUpper(data.higherSecondarySchoolName),

      address: safeToUpper(data.higherSecondarySchoolAddress),

      passingYear: safeToUpper(data.higherSecondaryPassingYear),
    },

    {
      level: "Honours",

      schoolName: safeToUpper(data.honoursSchoolName),

      address: safeToUpper(data.honoursSchoolAddress),

      passingYear: safeToUpper(data.honoursPassingYear),
    },

    {
      level: "Masters",

      schoolName: safeToUpper(data.mastersSchoolName),

      address: safeToUpper(data.mastersSchoolAddress),

      passingYear: safeToUpper(data.mastersPassingYear),
    },
  ].filter((item) => item.schoolName),

  // =====================================================
  // CURRENT EDUCATION
  // =====================================================

  currentEducation: {
    currentAdmissionStatus: data.currentAdmissionStatus,

    universityName: safeToUpper(data.currentUniversityName),

    department: safeToUpper(data.currentDepartment),

    course: safeToUpper(data.currentCourse),

    semester: safeToUpper(data.currentSemester),

    registration: safeToUpper(data.currentRegistration),

    roll: safeToUpper(data.currentRoll),
  },

  // =====================================================
  // JAPANESE LANGUAGE TESTS
  // =====================================================

  japaneseLanguageTests: [
    {
      exam: "JLPT",

      level: safeToUpper(data.JLPTLevel),

      rollNumber: safeToUpper(data.JLPTRollNumber),

      score: safeToUpper(data.JLPTScore),

      examDate: safeToUpper(data.JLPTExamDate),

      expectedExamDate: safeToUpper(data.JLPTExpectedExamDate),
    },

    {
      exam: "NAT",

      level: safeToUpper(data.NATLevel),

      rollNumber: safeToUpper(data.NATRollNumber),

      score: safeToUpper(data.NATScore),

      examDate: safeToUpper(data.NATExamDate),

      expectedExamDate: safeToUpper(data.NATExpectedExamDate),
    },

    {
      exam: "JPT",

      level: safeToUpper(data.JPTLevel),

      rollNumber: safeToUpper(data.JPTRollNumber),

      score: safeToUpper(data.JPTScore),

      examDate: safeToUpper(data.JPTExamDate),

      expectedExamDate: safeToUpper(data.JPTExpectedExamDate),
    },

    {
      exam: "JLCT",

      level: safeToUpper(data.JLCTLevel),

      rollNumber: safeToUpper(data.JLCTRollNumber),

      score: safeToUpper(data.JLCTScore),

      examDate: safeToUpper(data.JLCTExamDate),

      expectedExamDate: safeToUpper(data.JLCTExpectedExamDate),
    },

    {
      exam: "Top_J",

      level: safeToUpper(data.Top_JLevel),

      rollNumber: safeToUpper(data.Top_JRollNumber),

      score: safeToUpper(data.Top_JScore),

      examDate: safeToUpper(data.Top_JExamDate),

      expectedExamDate: safeToUpper(data.Top_JExpectedExamDate),
    },

    {
      exam: "J_Test",

      level: safeToUpper(data.J_TestLevel),

      rollNumber: safeToUpper(data.J_TestRollNumber),

      score: safeToUpper(data.J_TestScore),

      examDate: safeToUpper(data.J_TestExamDate),

      expectedExamDate: safeToUpper(data.J_TestExpectedExamDate),
    },
  ].filter(
    (item) =>
      item.level ||
      item.rollNumber ||
      item.score ||
      item.examDate ||
      item.expectedExamDate,
  ),
});

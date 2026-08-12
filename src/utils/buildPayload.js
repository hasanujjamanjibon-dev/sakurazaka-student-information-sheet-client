export const buildPayload = (data) => ({
  // =====================================================
  // STUDENT INFORMATION
  // =====================================================

  studentInformation: {
    studentPhoto: data.studentPhoto,

    studentName: data.studentName.toUpperCase(),

    studentPhone: data.studentPhone,

    studentAltPhone: data.studentAltPhone,

    studentDob: data.studentDob,

    studentPresentAddress: data.studentPresentAddress.toUpperCase(),

    studentFatherPhone: data.studentFatherPhone,

    studentMotherPhone: data.studentMotherPhone,
  },

  // =====================================================
  // SPONSOR INFORMATION
  // =====================================================

  sponsorInformation: {
    sponsorPhoto: data.sponsorPhoto,

    sponsorName: data.sponsorName.toUpperCase(),

    sponsorFatherName: data.sponsorFatherName.toUpperCase(),

    sponsorMotherName: data.sponsorMotherName.toUpperCase(),

    sponsorBusinessName: data.sponsorBusinessName.toUpperCase(),

    sponsorBusinessCategory: data.sponsorBusinessCategory.toUpperCase(),

    sponsorNidNumber: data.sponsorNidNumber,
  },

  // =====================================================
  // FAMILY INFORMATION
  // =====================================================

  familyInformation: [
    {
      relation: "Father",
      name: data.fatherName.toUpperCase(),
      dob: data.fatherDob,
      occupation: data.fatherOccupation.toUpperCase(),
    },

    {
      relation: "Mother",
      name: data.motherName.toUpperCase(),
      dob: data.motherDob,
      occupation: data.motherOccupation.toUpperCase(),
    },

    {
      relation: data.siblingRelationship.toUpperCase(),
      name: data.siblingName.toUpperCase(),
      dob: data.siblingDob,
      occupation: data.siblingOccupation.toUpperCase(),
    },
  ].filter((item) => item.name),

  // =====================================================
  // EDUCATIONAL HISTORY
  // =====================================================

  educationalHistory: [
    {
      level: "Primary",

      schoolName: data.primarySchoolName.toUpperCase(),

      address: data.primarySchoolAddress.toUpperCase(),

      passingYear: data.primaryPassingYear.toUpperCase(),
    },

    {
      level: "Secondary",

      schoolName: data.secondarySchoolName.toUpperCase(),

      address: data.secondarySchoolAddress.toUpperCase(),

      passingYear: data.secondaryPassingYear.toUpperCase(),
    },

    {
      level: "Higher Secondary",

      schoolName: data.higherSecondarySchoolName.toUpperCase(),

      address: data.higherSecondarySchoolAddress.toUpperCase(),

      passingYear: data.higherSecondaryPassingYear.toUpperCase(),
    },

    {
      level: "Honours",

      schoolName: data.honoursSchoolName.toUpperCase(),

      address: data.honoursSchoolAddress.toUpperCase(),

      passingYear: data.honoursPassingYear.toUpperCase(),
    },

    {
      level: "Masters",

      schoolName: data.mastersSchoolName.toUpperCase(),

      address: data.mastersSchoolAddress.toUpperCase(),

      passingYear: data.mastersPassingYear.toUpperCase(),
    },
  ].filter((item) => item.schoolName),

  // =====================================================
  // CURRENT EDUCATION
  // =====================================================

  currentEducation: {
    currentAdmissionStatus: data.currentAdmissionStatus,

    universityName: data.currentUniversityName.toUpperCase(),

    department: data.currentDepartment.toUpperCase(),

    course: data.currentCourse.toUpperCase(),

    semester: data.currentSemester.toUpperCase(),

    registration: data.currentRegistration.toUpperCase(),

    roll: data.currentRoll.toUpperCase(),
  },

  // =====================================================
  // JAPANESE LANGUAGE TESTS
  // =====================================================

  japaneseLanguageTests: [
    {
      exam: "JLPT",

      level: data.JLPTLevel.toUpperCase(),

      rollNumber: data.JLPTRollNumber.toUpperCase(),

      score: data.JLPTScore.toUpperCase(),

      examDate: data.JLPTExamDate.toUpperCase(),

      expectedExamDate: data.JLPTExpectedExamDate.toUpperCase(),
    },

    {
      exam: "NAT",

      level: data.NATLevel.toUpperCase(),

      rollNumber: data.NATRollNumber.toUpperCase(),

      score: data.NATScore.toUpperCase(),

      examDate: data.NATExamDate.toUpperCase(),

      expectedExamDate: data.NATExpectedExamDate.toUpperCase(),
    },

    {
      exam: "JPT",

      level: data.JPTLevel.toUpperCase(),

      rollNumber: data.JPTRollNumber.toUpperCase(),

      score: data.JPTScore.toUpperCase(),

      examDate: data.JPTExamDate.toUpperCase(),

      expectedExamDate: data.JPTExpectedExamDate.toUpperCase(),
    },

    {
      exam: "JLCT",

      level: data.JLCTLevel.toUpperCase(),

      rollNumber: data.JLCTRollNumber.toUpperCase(),

      score: data.JLCTScore.toUpperCase(),

      examDate: data.JLCTExamDate.toUpperCase(),

      expectedExamDate: data.JLCTExpectedExamDate.toUpperCase(),
    },

    {
      exam: "Top_J",

      level: data.Top_JLevel.toUpperCase(),

      rollNumber: data.Top_JRollNumber.toUpperCase(),

      score: data.Top_JScore.toUpperCase(),

      examDate: data.Top_JExamDate.toUpperCase(),

      expectedExamDate: data.Top_JExpectedExamDate.toUpperCase(),
    },

    {
      exam: "J_Test",

      level: data.J_TestLevel.toUpperCase(),

      rollNumber: data.J_TestRollNumber.toUpperCase(),

      score: data.J_TestScore.toUpperCase(),

      examDate: data.J_TestExamDate.toUpperCase(),

      expectedExamDate: data.J_TestExpectedExamDate.toUpperCase(),
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

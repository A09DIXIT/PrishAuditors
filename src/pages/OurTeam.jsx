import React, { useEffect } from "react";
import MeetOurCEO from "../assets/components/AboutUs.component/MeetOurCEO";
import OurTeamMembers from "../assets/components/AboutUs.component/OurTeamMembers";
import MeetOurCofounder from "../assets/components/AboutUs.component/MeetOurCF";

const OurTeam = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      {/* Include the CEO section */}
      <MeetOurCEO />
<MeetOurCofounder />
      {/* Team members section */}
      <OurTeamMembers />
    </div>
  );
};

export default OurTeam;

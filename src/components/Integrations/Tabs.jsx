import { useState } from "react";
import {
  MousePointer,
  Cable,
  Link,
  NotebookTabs,
  FileSpreadsheet,
  PartyPopper,
} from "lucide-react";
import { Button } from "../../@/components/ui/button";
import { step } from "@material-tailwind/react";
import airtableImage2 from "../../assets/Integrations/airtableImage2.png"
import airtableImage3 from "../../assets/Integrations/airtableImage3.png"
import airtableImage4 from "../../assets/Integrations/airtableImage4.png"
import airtableImage5 from "../../assets/Integrations/airtableImage5.png"
import airtableImage6 from "../../assets/Integrations/airtableImage6.png"
import airtableImage7 from "../../assets/Integrations/airtableImage7.png"
import googleSheetsImage1 from "../../assets/Integrations/googleSheetImage1.png";
import googleSheetsImage2 from "../../assets/Integrations/googleSheetImage2.png";
import googleSheetsImage3 from "../../assets/Integrations/googleSheetImage3.png";
import googleSheetsImage4 from "../../assets/Integrations/googleSheetImage4.png";
import googleSheetsImage5 from "../../assets/Integrations/googleSheetImage5.png";
import googleSheetsImage6 from "../../assets/Integrations/googleSheetImage6.png";
import notionImage2 from "../../assets/Integrations/notionImage2.png"
import notionImage3 from "../../assets/Integrations/notionImage3.png"
import notionImage4 from "../../assets/Integrations/notionImage4.png"
import notionImage5 from "../../assets/Integrations/notionImage5.png"
import notionImage6 from "../../assets/Integrations/notionImage6.png"
import slackImage2 from "../../assets/Integrations/slackImage2.png"
import slackImage3 from "../../assets/Integrations/slackImage3.png"
import slackImage4 from "../../assets/Integrations/slackImage4.png"
import slackImage5 from "../../assets/Integrations/slackImage5.png"
import slackImage6 from "../../assets/Integrations/slackImage6.png"
import slackImage7 from "../../assets/Integrations/slackImage7.png"

import Steps from "./Steps"

const tabs = [
  { id: 1, label: "Airtable"},
  { id: 2, label: "Google Sheets"},
  { id: 3, label: "Notion"},
  { id: 4, label: "Slack" },
  // { id: 5, label: "Zapier"},
  // { id: 6, label: "n8n"},
];

const tabContent = {
  1: {
    heading: "Airtable",
    desc: "A step-by-step guide to integrate Airtable with Surveybull.",
    data: [
      {
        id: 1,
        label: "Select Airtable",
        icon: MousePointer,
        data: {
          title: "Select Airtable",
          desc: "Go to the Integrations tab in surveybull integration dashboard and click on the “Connect” button under Airtable integration.",
          img: googleSheetsImage1,
        },
      },
      {
        id: 2,
        label: "Connect with Airtable",
        icon: Cable,
        data: {
          title: "Connect with Airtable",
          desc: "Now click on the “Connect with Airtable” button to authenticate yourself with Airtable.",
          img: airtableImage2,
        },
      },
      {
        id: 3,
        label: "Grant access",
        icon: Link,
        data: {
          title: "Grant access",
          desc: "You will now be taken to a page where you need to add and grant access to the base you want to use for the integration.",
          img: airtableImage3,
        },
      },
      {
        id: 4,
        label: "Link New Table",
        icon: NotebookTabs,
        data: {
          title: "Link New Table",
          desc: "Once you add and grant access to your base, you will be taken back to Surveybull and see the connected status as below:",
          desc2: "Now click on the “Link New Table” button to link an Airtable with Formbricks and a modal will open up.",
          img: airtableImage4,
        },
      },
      {
        id: 5,
        label: "Select Details",
        icon: NotebookTabs,
        data: {
          title: "Select Details",
          desc: "Select the Airtable base you want to link with surveybull and the Survey.",
          img: airtableImage5,
        },
      },
      {
        id: 6,
        label: "Enter Details",
        icon: FileSpreadsheet,
        data: {
          title: "Enter Details",
          desc: "On doing so, you will be asked with what questions’ responses you want to feed in Airtable. Select the questions and click on the “Save” button.",
          img: airtableImage6,
        },
      },
      {
        id: 7,
        label: "Complete",
        icon: PartyPopper,
        data: {
          title: "Complete",
          desc: "On submitting, the modal will close and you will see the linked table in the list of linked tables.",
          img: googleSheetsImage6,
        },
      },
    ],
  },
  2: {
    heading: "Google Sheets",
    desc: "The Google Sheets integration allows you to automatically send responses to a Google Sheet of your choice.",
    data: [
      {
        id: 1,
        label: "Select Google Sheets",
        icon: MousePointer,
        data: {
          title: "Select Google Sheets",
          desc: "Go to the Integrations tab in your surveybull Integration dashboard and click on the “Connect” button under Google Sheets integration.",
          img: googleSheetsImage1,
        },
      },
      {
        id: 2,
        label: "Connect with Google",
        icon: Cable,
        data: {
          title: "Connect with Google",
          desc: "Now click on the “Connect with Google” button to authenticate yourself with Google.",
          desc2: "You will now be taken to the Google OAuth page where you can select the Google account you want to use for the integration.",
          img: googleSheetsImage2,
        },
      },
      {
        id: 3,
        label: "Link New Sheet",
        icon: Link,
        data: {
          title: "Link New Sheet",
          desc: "Once you have selected the account and completed the authentication process, you will be taken back to Surveybull and see the connected status as below:",
          desc2: "Now click on the “Link New Sheet” button to link a Google Sheet with Surveybull and a modal will open up.",
          img: googleSheetsImage3,
        },
      },
      {
        id: 4,
        label: "Select Details",
        icon: NotebookTabs,
        data: {
          title: "Select Details",
          desc: "Select the spreadsheet URL for the Google Sheet you want to link with surveybull and the Survey. ",
          img: googleSheetsImage4,
        },
      },
      {
        id: 5,
        label: "Link Sheet",
        icon: FileSpreadsheet,
        data: {
          title: "Link Sheet",
          desc: "On doing so, you will be asked with what questions’ responses you want to feed in the Google Sheet. Select the questions and click on the “Link Sheet” button.",
          img: googleSheetsImage5,
        },
      },
      {
        id: 6,
        label: "Complete",
        icon: PartyPopper,
        data: {
          title: "Complete",
          desc: "Now, you will see the linked Google Sheet in the list of linked Google Sheets.",
          img: googleSheetsImage6,
        },
      },
    ],
  },
  3: {
    heading: "Notion",
    desc: "The notion integration allows you to automatically send responses to a Notion database of your choice.",
    data: [
      {
        id: 1,
        label: "Select Notion",
        icon: MousePointer,
        data: {
          title: "Select Notion",
          desc: "Go to the Integrations tab in your Surveybull dashboard and click on the “Connect” button under Notion integration.",
          img: googleSheetsImage1,
        },
      },
      {
        id: 2,
        label: "Connect with Notion",
        icon: Cable,
        data: {
          title: "Connect with Notion",
          desc: "Now click on the “Connect with Notion” button to authenticate yourself with Notion.",
          desc2: "You will now be taken to the Notion OAuth page where you can select the Notion account you want to use for the integration.",
          img: notionImage2,
        },
      },
      {
        id: 3,
        label: "Link New Database",
        icon: Link,
        data: {
          title: "Link New Database",
          desc: "Once you have selected the account and databases and completed the authentication and authorization process, you will be taken back to Formbricks Cloud and see the connected status as below:",
          desc2: "Now click on the “Link New Database” button to link a Notion database with Formbricks and a modal will open up.",
          img: notionImage3,
        },
      },
      {
        id: 4,
        label: "Enter Details",
        icon: NotebookTabs,
        data: {
          title: "Enter Details",
          desc: "Select the Notion database you want to link with Formbricks and the Survey. ",
          img: notionImage4,
        },
      },
      {
        id: 5,
        label: "Link Database",
        icon: FileSpreadsheet,
        data: {
          title: "Link Database",
          desc: "On doing so, you will be asked to map formbricks’ survey questions with selected databases’ column. Complete the mapping and click on the “Link Database” button.",
          img: notionImage5,
        },
      },
      {
        id: 6,
        label: "Complete",
        icon: PartyPopper,
        data: {
          title: "Complete",
          desc: "Now, you will see the linked Notion database in the list of linked Notion databases.",
          img: notionImage6,
        },
      },
    ],
  },
  4: {
    heading: "Slack",
    desc: "The slack integration allows you to automatically send responses to a Slack channel of your choice.",
    data: [
      {
        id: 1,
        label: "Select Slack",
        icon: MousePointer,
        data: {
          title: "Select Slack",
          desc: "Go to the Integrations tab in your Surveybull dashboard and click on the “Connect” button under Slack integration.",
          img: googleSheetsImage1,
        },
      },
      {
        id: 2,
        label: "Connect with Slack",
        icon: Cable,
        data: {
          title: "Connect with Slack",
          desc: "Now click on the “Connect with Slack” button to authenticate yourself with Slack.",
          img: slackImage2,
        },
      },
      {
        id: 3,
        label: "Grant access",
        icon: Link,
        data: {
          title: "Grant access",
          desc: "You will now be taken to the Slack OAuth page where you can select the Slack channel you want to link with Surveybull and click on the “Allow” button.",
          img: slackImage3,
        },
      },
      {
        id: 4,
        label: "Link New Table",
        icon: NotebookTabs,
        data: {
          title: "Link New Table",
          desc: "Once you have selected the account and completed the authentication process, you will be taken back to Formbricks Cloud and see the connected status as below:",
          desc2: "Now click on the “Link New Table” button to link an Airtable with Formbricks and a modal will open up.",
          img: slackImage4,
        },
      },
      {
        id: 5,
        label: "Select Details",
        icon: NotebookTabs,
        data: {
          title: "Select Details",
          desc: "Select the channel you want to link with Formbricks and the Survey.",
          img: slackImage5,
        },
      },
      {
        id: 6,
        label: "Enter Details",
        icon: FileSpreadsheet,
        data: {
          title: "Enter Details",
          desc: "On doing so, you will be asked to select the questions’ responses you want to feed in the Slack channel. Select the questions and click on the “Link Channel” button.",
          img: slackImage6,
        },
      },
      {
        id: 7,
        label: "Complete",
        icon: PartyPopper,
        data: {
          title: "Complete",
          desc: "On submitting, the modal will close and you will see the linked Slack channel in the list of linked Slack channels.",
          img: googleSheetsImage6,
        },
      },
    ],
  },
  // 5: {
  //   heading: "Zapier",
  //   desc: "Master the integration of Surveybull with Zapier using our detailed guide. Seamlessly connect your surveys to 5000+ apps, automate data transfers, and enhance feedback management. Start optimizing your workflow today.",
  //   data: [
  //     {
  //       id: 1,
  //       label: "",
  //       icon: MousePointer,
  //       data: {
  //         title: "Setup your survey incl. questionId for every question",
  //         desc: "When setting up the Zap your life will be easier when you change the questionIds of your survey questions. You can only do so before you publish your survey.",
  //         desc2: "In every question card in the Advanced Settings you find the Question ID field. Update it so that you’ll recognize the response tied to this question.",
  //         img: googleSheetsImage1,
  //       },
  //     },
  //     {
  //       id: 2,
  //       label: "",
  //       icon: Cable,
  //       data: {
  //         title: "Send a test response",
  //         desc: "In order to set up Zapier you’ll need a test response. This allows you to select the individual values of each response in your Zap.",
  //         img: googleSheetsImage2,
  //       },
  //     },
  //     {
  //       id: 3,
  //       label: " Setup your Zap",
  //       icon: Link,
  //       data: {
  //         title: " Setup your Zap",
  //         desc: "Go to zapier.com and create a new Zap. Search for “Formbricks” to get started:",
  //         desc2: "Then, choose the event you want to trigger the Zap on:",
  //         img: googleSheetsImage3,
  //       },

  //     },
  //     {
  //       id: 4,
  //       label: "",
  //       icon: NotebookTabs,
  //       data: {
  //         title: "Connect Formbricks with Zapier",
  //         desc: "Now, you have to connect Zapier with Formbricks via an API Key:",
  //         desc2: "Now you need an API key. Please refer to the API Key Setup page to learn how to create one. Once you copied it in the newly opened Zapier window, you will be connected:",
  //         img: googleSheetsImage4,
  //       },

  //     },
  //     {
  //       id: 5,
  //       label: "Select Survey",
  //       icon: FileSpreadsheet,
  //       data: {
  //         title: "Select Survey",
  //         desc: "Next, you can choose from all the surveys you have created in this environment:",
  //         img: googleSheetsImage5,
  //       },
  //     },
  //     {
  //       id: 6,
  //       label: "Test your trigger",
  //       icon: PartyPopper,
  //       data: {
  //         title: "Test your trigger",
  //         desc: "Once you hit “Test” you will see the three most recent submissions for this survey. If you don’t have any submissions in the survey, submit one to continue setting up your Zap:",
  //         img: googleSheetsImage6,
  //       },
  //     },
  //     {
  //       id: 7,
  //       label: "Set up your Zap",
  //       icon: PartyPopper,
  //       data: {
  //         title: "Set up your Zap",
  //         desc: "Now you have all the data you need at hand. The next steps depend on what you want to do with it. In this tutorial, we will send submissions to a Slack channel:",
  //         desc2: "In the action itself we can determine the data and layout of the message. Here, we only choose the submission data. You can also refer to the meta data of the submission and the attributes of the person who submitted the survey.",
  //         img: googleSheetsImage6,
  //       },
  //     }
  //   ]
  // },
  // 6: {
  //   heading: "n8n",
  //   desc: "Integrate Surveybull with n8n for a streamlined workflow experience.",
  //   data: [
  //     {
  //       id: 1,
  //       label: "",
  //       icon: MousePointer,
  //       data: {
  //         title: "Setup your survey incl. questionId for every question",
  //         desc: "When setting up the node your life will be easier when you change the questionIds of your survey questions. You can only do so before you publish your survey.",
  //         desc2: "In every question card in the Advanced Settings you find the Question ID field. Update it so that you’ll recognize the response tied to this question.",
  //         img: googleSheetsImage1,
  //       },
  //     },
  //     {
  //       id: 2,
  //       label: "",
  //       icon: Cable,
  //       data: {
  //         title: "Setup your n8n workflow",
  //         desc: "Go to n8n.io and create a new workflow. Search for “Formbricks” to get started:",
  //         img: googleSheetsImage2,
  //       },
  //     },
  //     {
  //       id: 3,
  //       label: "",
  //       icon: Link,
  //       data: {
  //         title: "Connect Surveybull with n8n",
  //         desc: "Now, you have to connect n8n with Formbricks via an API Key: , Click on Create New Credentail button to add your host and API Key, ",
  //         desc2: "Now you need an API key. Please refer to the API Key Setup page to learn how to create one.Once you copied it in the API Key field, hit Save button to test the connection and save the credentials.",
  //         img: googleSheetsImage3,
  //       },

  //     },
  //     {
  //       id: 4,
  //       label: "",
  //       icon: NotebookTabs,
  //       data: {
  //         title: "Select Event",
  //         desc: "Next, you can choose the event you want to trigger the node on. You can select multiple events:",
  //         desc2: "Here, we are adding Response Finished as an event, which will trigger when the survey has been filled out.",
  //         img: googleSheetsImage4,
  //       },

  //     },
  //     {
  //       id: 5,
  //       label: "",
  //       icon: FileSpreadsheet,
  //       data: {
  //         title: "Select Survey",
  //         desc: "Next, you can choose from all the surveys you have created in this environment. You can select multiple surveys:",
  //         desc2: "Here, we are selecting two surveys.",
  //         img: googleSheetsImage5,
  //       },
  //     },
  //     {
  //       id: 6,
  //       label: "Test your trigger",
  //       icon: PartyPopper,
  //       data: {
  //         title: "Test your trigger",
  //         desc: "In order to set up n8n you’ll need a test response in the selected survey. This allows you to select the individual values of each response in your workflow.",
  //         desc2: "Then, go to the survey which you selected. Fill it out, and wait for the particular event to trigger (in this case it’s Response Finished). Once the event is triggered you will see the response that you filled out in the survey. Now you have all the data you need at hand. The next steps depend on what you want to do with it. In this tutorial, we will send submissions to a discord channel:",
  //         img: googleSheetsImage6,
  //       },
  //     },
  //     {
  //       id: 7,
  //       label: "",
  //       icon: PartyPopper,
  //       data: {
  //         title: "Add discord to your workflow",
  //         desc: "Click on the plus and search Discord. Fill in the Webhook URL and the Content that you want to receive in the respective discord channel. Next, click on Execute Node button to test the node. Next, click on Listen for event button.",
  //         desc2: "Once the execution is successful, you’ll receive the content in the discord channel. ",
  //         img: googleSheetsImage6,
  //       },
  //     }
  //   ]
  // },
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1); 
  const [activeStep, setActiveStep] = useState(1);
  const content = tabContent[activeTab];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap items-start gap-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`flex flex-col items-center cursor-pointer relative transition-colors`}
              onClick={() => {
                setActiveStep(1);
                setActiveTab(tab.id)
              }}
            >
              {/* <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-blue-600" : "text-gray-400"}`} /> */}
              <span className={`text-lg px-4 ${isActive ? "text-[#3B4EF4]" : "text-gray-400"}`}>
                {tab.label}
              </span>
              {isActive && <div className="absolute -bottom-1 w-full h-0.5 bg-[#3B4EF4] rounded-full"></div>}
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="mt-10 flex flex-col items-start gap-7">
        <div className="">
          <div className="md:text-4xl text-2xl font-HelveticaNeueBold ">
            {content.heading}
          </div>
          <div className="text-[14px] md:text-base font-normal">
            {content.desc}
          </div>
        </div>
        <Steps
          content={content.data}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </div>
  );
}

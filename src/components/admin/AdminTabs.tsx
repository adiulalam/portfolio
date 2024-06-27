import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, IconButton, Tab } from "@mui/material";
import { useState } from "react";
import type { SyntheticEvent } from "react";
import {
  Close as CloseIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@mui/icons-material";

type AdminTabsProps = {
  deleteCallback?: (tab: string) => void;
  addCallback?: () => void;
  tabLists: { label: string; value: string; component: JSX.Element }[];
};

export const AdminTabs = ({
  deleteCallback,
  addCallback,
  tabLists,
}: AdminTabsProps) => {
  const [value, setValue] = useState(tabLists[0]?.value ?? "0");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleDelete = (id: string) => {
    console.log("🚀 ~ handleDelete ~ tab:", id);
    console.log("deleted");
    deleteCallback && deleteCallback(id);
  };

  const handleAdd = () => {
    console.log("added");
    addCallback && addCallback();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "white",
          }}
        >
          <TabList onChange={handleChange} centered>
            {tabLists.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={{ color: "white", minHeight: 0 }}
                icon={
                  deleteCallback ? (
                    <CloseIcon
                      onClick={() => handleDelete(tab.value)}
                      sx={{
                        "&:hover": {
                          color: "red",
                          background: "rgba(255, 255, 255, 0.5)",
                          borderRadius: "50%",
                        },
                      }}
                    />
                  ) : undefined
                }
                iconPosition="end"
              />
            ))}
            {addCallback && (
              <IconButton
                onClick={handleAdd}
                sx={{
                  "&:hover": {
                    color: "green",
                    background: "rgba(255, 255, 255, 0.5)",
                    borderRadius: "50%",
                  },
                }}
              >
                <AddCircleOutlineIcon sx={{ color: "white" }} />
              </IconButton>
            )}
          </TabList>
        </Box>
        {tabLists.map(({ component, value }) => (
          <TabPanel key={value} value={value} sx={{ color: "white" }}>
            {component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

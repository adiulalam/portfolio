import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, IconButton, Tab } from "@mui/material";
import { useState } from "react";
import type { SyntheticEvent } from "react";
import {
  Close as CloseIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@mui/icons-material";

type CustomTabProps = {
  defaultValue?: string;
  deleteCallback?: (tab: string) => void;
  addCallback?: () => void;
  tabLists: { label: string; value: string; component: JSX.Element }[];
};

export const CustomTab = ({
  defaultValue,
  deleteCallback,
  addCallback,
  tabLists,
}: CustomTabProps) => {
  const [value, setValue] = useState(defaultValue ?? tabLists[0]?.value ?? "0");

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <TabList
          sx={{
            ".MuiTabs-flexContainer": { flexWrap: "wrap" },
            borderBottom: 1,
          }}
          onChange={handleChange}
          centered
        >
          {tabLists.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
              sx={{ minHeight: 0 }}
              icon={
                deleteCallback ? (
                  <CloseIcon
                    onClick={() => deleteCallback(tab.value)}
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
              onClick={addCallback}
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
        {tabLists.map(({ component, value }) => (
          <TabPanel key={value} value={value} sx={{ color: "white" }}>
            {component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

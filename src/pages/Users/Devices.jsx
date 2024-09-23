import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";


const data = [
  { label: 'Item One', content: 'Item One Content' },
  { label: 'Item Two', content: 'Item Two Content' },
  { label: 'Item Three', content: 'Item Three Content' },
];

export default function Devices() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {data.map((item, index) => (
          <Tab key={index} label={item.label} />
        ))}
      </Tabs>
      {data.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {item.content}
        </TabPanel>
      ))}
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


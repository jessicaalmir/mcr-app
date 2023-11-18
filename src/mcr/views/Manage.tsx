import { Box } from "@mui/material"

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'txStart',
      headerName: 'TX Start',
      width: 150,
      editable: true,
    },
    {
      field: 'txEnd',
      headerName: 'TX End',
      width: 150,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      description: 'This column is not sortable.',
      sortable: false,
      width: 160,
    },
  ];

export const Manage = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>

        </Box>
    )
}

'use client'
import { React, useState } from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
    Drawer,
    Card,ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,   PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    HomeIcon,
    DocumentIcon,
    DocumentDuplicateIcon,
    ShareIcon,
    TrashIcon,
    PencilIcon,
} from "../app/MTailwind";

import {Progressivebar} from './Progressivebar'

 


export const Sidebar = () => {
    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <div className="mt-[20px] ml-[20px]">
            <IconButton variant="text" size="md" onClick={openDrawer}>
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2 text-white" />
                ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2 text-white" />
                )}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    <div className="mb-2 flex items-center gap-4 p-4">
                        <img
                            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                            alt="brand"
                            className="h-4 w-4"
                        />
                        <Typography variant="h5" color="blue-gray" className='text-[10px]'> 
                            Untitled UI
                        </Typography>
                    </div>

                    <List>
                        <ListItem>
                            <ListItemPrefix>
                                <HomeIcon className="h-4 w-4" />

                            </ListItemPrefix>
                           <h2 className='text-[8px]'> Home</h2>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <DocumentIcon className="h-4 w-4" />


                            </ListItemPrefix>
                            <h2 className='text-[8px]'> All Files</h2>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <DocumentDuplicateIcon className="h-4 w-4" />


                            </ListItemPrefix>
                            <h2 className='text-[8px]'> Private Files</h2>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <ShareIcon className="h-4 w-4" />


                            </ListItemPrefix>
                            <h2 className='text-[8px]'> Shared with me</h2>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <TrashIcon className="h-4 w-4" />



                            </ListItemPrefix>
                            <h2 className='text-[8px]'> Deleted files</h2>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <PencilIcon className="h-4 w-4" />




                            </ListItemPrefix>
                            <h2 className='text-[8px]'> Design</h2>
                        </ListItem>

                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-4 w-4" />
                            </ListItemPrefix>
                            <h2 className='text-[8px]'> Notifications</h2>
                            <ListItemSuffix>
                                <Chip
                                    value="14"
                                    size="sm"
                                    variant="ghost"
                                    color="blue-gray"
                                    className="rounded-full"
                                />
                            </ListItemSuffix>
                        </ListItem>

                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-4 w-4" />
                            </ListItemPrefix>
                            <h2 className='text-[8px]'> Settings</h2>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <PowerIcon className="h-4 w-4" />
                            </ListItemPrefix>
                            <h2 className='text-[8px]'> Log out</h2>
                        </ListItem>
                    </List>
                    <Alert
                        open={openAlert}
                        className="mt-auto"
                        onClose={() => setOpenAlert(false)}
                    >
                        <CubeTransparentIcon className="mb-4 h-8 w-8" />
                        <Typography variant="h6" className="mb-1">
                            Upgrade to PRO
                        </Typography>
                        <Typography variant="small" className="font-normal opacity-80">
                            Upgrade to Rayca Precision for insights, premium services as well as for gifts and vouchers.
                        </Typography>
                        <div className="mt-4 flex gap-3">
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium opacity-80"
                                onClick={() => setOpenAlert(false)}
                            >
                                Dismiss
                            </Typography>
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium"
                            >
                                Upgrade Now
                            </Typography>



                        </div>
                    </Alert>
<Progressivebar/>
                </Card>
            </Drawer>
        </div>
    );
}
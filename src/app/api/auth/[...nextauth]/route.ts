
import NextAuth from "next-auth";
import {handlers} from '../../../../components/Auth/auth'
import React from 'react';

export const {GET , POST} = handlers ? handlers : ["GET"] ;
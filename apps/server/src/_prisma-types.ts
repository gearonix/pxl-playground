// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT


export enum SiteStatus {
    WORKING = 'WORKING',
    CLOSED = 'CLOSED',
}


export interface User {
    userId: number,
    phoneNumber: string,
    password: string,
    deliveryAddress?: string,
    isAdmin: boolean,
    isBlocked: boolean,
    balance: number,
    orders: UserOrder[],
    username: string,
}

export interface Disc {
    type: string,
    cusa: string,
    id: number,
    name: string,
    cost: number,
    createdAt: Date,
}

export interface UserOrder {
    discs: any,
    status: string,
    createdBy: number,
    orderId: number,
    totalAmount: number,
    id: number,
    createdAt: Date,
    user: User,
}

export interface GlobalSettings {
    id: number,
    IS_SITE_DOWN: SiteStatus,
}

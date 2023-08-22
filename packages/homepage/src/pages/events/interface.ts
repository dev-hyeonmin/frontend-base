export interface EventDegree {
    cha: number,
    chaName: string,
    eventText: string,
    startDate: string,
    endDate: string,
}

export interface EventGroup {
    id: number,
    groupName: string,
    groupSubName: string,
    startDate: string,
    endDate: string,
}

export interface EventItem {
    id: number,
    itemName: string,
    itemSubName: string,
    originalPrice: number,
    discountedPrice: number,
}
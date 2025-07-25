// FixedNav.types.ts
export interface NavItem {
    id: string;
    label: string;
    targetId: string;
  }
  
  export interface FixedNavProps {
    items: NavItem[];
    activeId: string;
  }
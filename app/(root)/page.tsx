'use client'
import { Modal } from "@/components/ui/modal";

export default function SetupPage() {
    return (
   <div className="p-4">
      {/* <UserButton afterSignOutUrl='/' /> */}
      <Modal title="Hello" description="Hello" isOpen={false  } onClose={() => {}} />
   </div>
    );
  }
  
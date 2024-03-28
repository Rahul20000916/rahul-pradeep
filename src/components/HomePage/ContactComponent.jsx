import React from "react";

const ContactComponent = () => {
  return (
    <div class="py-2 px-2 h-full">
      <div class="group relative block h-full bg-white before:absolute before:inset-0 before:rounded-md before:border-2 before:border-dashed before:border-gray-900">
        <div class="rounded-md h-full border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
          <div class="p-4 sm:p-6 h-full">
            <div class="flex items-start justify-between h-full">
              <span aria-hidden="true" role="img" class="text-lg sm:text-xl">
                🔢
              </span>
            </div>
            <h2 class="mt-4 font-medium text-gray-900 sm:text-lg">Contact</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
// GetStartedModal component
import Checkbox from "@/components/ui/checkbox";
import Radio from "@/components/ui/RadioGroup";
import heartImage from "@/assets/logo/heart.png";

export interface UserFormData {
  firstName: string;
  lastName: string;
  gender: string;
  languages: {
    english: boolean;
    hindi: boolean;
    marathi: boolean;
  };
  email: string;
  agreeToTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  agreeToTerms?: string;
}

interface GetStartedModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UserFormData) => void;
}

export const GetStartedModal = ({ open, onOpenChange, onSubmit }: GetStartedModalProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    gender: "female",
    languages: {
      english: true,
      hindi: false,
      marathi: false,
    },
    email: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
    }
  };

  const handleDone = () => {
    onSubmit(formData);
    setShowSuccess(false);
    onOpenChange(false);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      gender: "female",
      languages: {
        english: true,
        hindi: false,
        marathi: false,
      },
      email: "",
      agreeToTerms: false,
    });
    // Clear errors
    setErrors({});
  };

  return (
    <Modal 
      open={open} 
      onClose={() => onOpenChange(false)}
      title={!showSuccess ? "Get Started Today!" : undefined}
      description={!showSuccess ? "Fill in your details and take control of your tasks." : undefined}
    >
      {showSuccess ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <img src={heartImage} alt="Heart" className="w-16 h-16 mb-6" />
          <h2 className="text-2xl font-bold mb-4">Thank you for connect with us.</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our team will contacting with you soon
          </p>
          <Button
            onClick={handleDone}
            size="lg"
            className="w-full"
          >
            Done
          </Button>
        </div>
      ) : (

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                  if (errors.firstName) {
                    setErrors({ ...errors, firstName: undefined });
                  }
                }}
                className={errors.firstName ? "ring-2 ring-red-500" : ""}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                  if (errors.lastName) {
                    setErrors({ ...errors, lastName: undefined });
                  }
                }}
                className={errors.lastName ? "ring-2 ring-red-500" : ""}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Gender</Label>
            <div className="flex gap-3">
              <div className="flex items-center space-x-3 bg-rose-50 px-6 py-3 flex-1">
                <Radio 
                  value="male" 
                  id="male"
                  name="gender"
                  checked={formData.gender === "male"}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <Label htmlFor="male" className="cursor-pointer font-normal text-gray-700">
                  Male
                </Label>
              </div>
              <div className="flex items-center space-x-3 bg-rose-50 px-6 py-3 flex-1">
                <Radio 
                  value="female" 
                  id="female"
                  name="gender"
                  checked={formData.gender === "female"}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                />
                <Label htmlFor="female" className="cursor-pointer font-normal text-gray-700">
                  Female
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Language</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 bg-rose-50 px-4 py-3">
                <Checkbox
                  id="english"
                  checked={formData.languages.english}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      languages: { ...formData.languages, english: e.target.checked },
                    })
                  }
                />
                <Label htmlFor="english" className="cursor-pointer font-normal text-gray-700">
                  English
                </Label>
              </div>
              <div className="flex items-center space-x-3 bg-rose-50 px-4 py-3">
                <Checkbox
                  id="hindi"
                  checked={formData.languages.hindi}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      languages: { ...formData.languages, hindi: e.target.checked },
                    })
                  }
                />
                <Label htmlFor="hindi" className="cursor-pointer font-normal text-gray-700">
                  Hindi
                </Label>
              </div>
              <div className="flex items-center space-x-3 bg-rose-50 px-4 py-3">
                <Checkbox
                  id="marathi"
                  checked={formData.languages.marathi}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      languages: { ...formData.languages, marathi: e.target.checked },
                    })
                  }
                />
                <Label htmlFor="marathi" className="cursor-pointer font-normal text-gray-700">
                  Marathi
                </Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) {
                  setErrors({ ...errors, email: undefined });
                }
              }}
              className={errors.email ? "ring-2 ring-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onChange={(e) => {
                  setFormData({ ...formData, agreeToTerms: e.target.checked });
                  if (errors.agreeToTerms) {
                    setErrors({ ...errors, agreeToTerms: undefined });
                  }
                }}
              />
              <Label htmlFor="terms" className="cursor-pointer font-normal text-gray-700">
                I agree to the{" "}
                <span className="text-primary font-normal">terms and conditions</span>
              </Label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
          >
            Done
          </Button>
        </form>
      )}
    </Modal>
  );
};

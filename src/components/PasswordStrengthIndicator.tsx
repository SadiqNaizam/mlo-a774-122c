import React, { useMemo } from 'react';

interface PasswordStrengthIndicatorProps {
  /**
   * The password string to evaluate.
   */
  password?: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password = '' }) => {
  console.log('PasswordStrengthIndicator loaded');

  const strength = useMemo(() => {
    let score = 0;
    if (!password) {
      return {
        label: '',
        barCount: 0,
        color: 'text-gray-400',
        barColor: 'bg-gray-200',
      };
    }

    // Add points for each criterion met
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++; // Lowercase and Uppercase
    if (/[0-9]/.test(password)) score++; // Numbers
    if (/[^a-zA-Z0-9]/.test(password)) score++; // Special characters

    let label = '';
    let color = '';
    let barColor = '';

    switch (score) {
      case 0:
      case 1:
        label = 'Weak';
        color = 'text-red-500';
        barColor = 'bg-red-500';
        break;
      case 2:
        label = 'Medium';
        color = 'text-yellow-500';
        barColor = 'bg-yellow-500';
        break;
      case 3:
      case 4:
        label = 'Strong';
        color = 'text-green-500';
        barColor = 'bg-green-500';
        break;
      default:
        label = 'Weak';
        color = 'text-red-500';
        barColor = 'bg-red-500';
        break;
    }

    return { label, barCount: score, color, barColor };
  }, [password]);

  // Don't render the component if the password is empty
  if (!password) {
    return null;
  }

  return (
    <div className="w-full space-y-1">
      <div className="grid grid-cols-4 gap-x-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-colors duration-300 ${
              i < strength.barCount ? strength.barColor : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <p className={`text-xs font-medium ${strength.color}`}>{strength.label}</p>
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
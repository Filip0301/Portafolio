import { Skill } from '../services/firebase';
import { FaSave, FaTimes } from 'react-icons/fa';

const SKILL_CATEGORIES = [
  'Lenguajes de programación',
  'Desarrollo Web',
  'Base de Datos',
  'Herramientas',
  'Sistemas Operativos',
  'Idiomas',
  'Otros'
] as const;

type SkillCategory = typeof SKILL_CATEGORIES[number];

interface EditSkillFormProps {
  skill: Skill;
  onSave: () => void;
  onCancel: () => void;
  onChange: (updatedSkill: Skill) => void;
}

export default function EditSkillForm({ skill, onSave, onCancel, onChange }: EditSkillFormProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          value={skill.name}
          onChange={(e) => onChange({ ...skill, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <select
          value={skill.category}
          onChange={(e) => onChange({ ...skill, category: e.target.value as SkillCategory })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          {SKILL_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          value={skill.icon}
          onChange={(e) => onChange({ ...skill, icon: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Ejemplo: FaReact"
        />
        <input
          type="number"
          value={skill.years_experience.toString()}
          onChange={(e) => {
            const value = e.target.value === '' ? 0 : parseInt(e.target.value);
            onChange({ ...skill, years_experience: value });
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          min="0"
          step="1"
        />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onSave}
          className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <FaSave /> <span>Guardar</span>
        </button>
        <button
          onClick={onCancel}
          className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <FaTimes /> <span>Cancelar</span>
        </button>
      </div>
    </div>
  );
} 
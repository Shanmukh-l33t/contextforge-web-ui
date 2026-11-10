import { useIntl } from "react-intl";
import { Field } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { TextField } from "./agentFormParts";

interface TagsAndDescriptionFieldsProps {
  /** Distinguishes the ids when more than one set is on a page. */
  idPrefix: string;
  /** Comma-separated, as typed. */
  tags: string;
  onTagsChange: (value: string) => void;
  description: string;
  onDescriptionChange: (value: string) => void;
}

/** The two optional extras every way of connecting an agent offers. */
export function TagsAndDescriptionFields({
  idPrefix,
  tags,
  onTagsChange,
  description,
  onDescriptionChange,
}: TagsAndDescriptionFieldsProps) {
  const intl = useIntl();
  return (
    <div className="space-y-4">
      <TextField
        id={`${idPrefix}-tags`}
        label={intl.formatMessage({ id: "agents.connect.manual.tags.label" })}
        placeholder={intl.formatMessage({ id: "agents.connect.manual.tags.placeholder" })}
        value={tags}
        onChange={onTagsChange}
      />

      {/* The design shows the description without a visible label; keep one for screen readers. */}
      <Field
        id={`${idPrefix}-description`}
        label={intl.formatMessage({ id: "agents.connect.manual.description.label" })}
        labelProps={{ className: "sr-only" }}
      >
        {(controlProps) => (
          <Textarea
            {...controlProps}
            value={description}
            onChange={(event) => onDescriptionChange(event.target.value)}
            placeholder={intl.formatMessage({
              id: "agents.connect.manual.description.placeholder",
            })}
            className="min-h-20 rounded-md border-neutral-300 px-4 text-sm shadow-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 dark:border-neutral-700"
          />
        )}
      </Field>
    </div>
  );
}

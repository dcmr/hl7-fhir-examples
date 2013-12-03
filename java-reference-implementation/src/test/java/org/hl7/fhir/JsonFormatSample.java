package org.hl7.fhir;

import org.hl7.fhir.instance.formats.JsonComposer;
import org.hl7.fhir.instance.model.*;

import static org.hl7.fhir.instance.model.Encounter.EncounterLocationComponent;

public class JsonFormatSample {
    @org.junit.Test
    public void shouldBeAbleToComposeJsonFromEncounterResource() throws Exception {
        final Encounter encounter = new Encounter();

        Identifier myId = new Identifier();
        myId.setValue(string_("id-12345"));
        encounter.getIdentifier().add(myId);

        ResourceReference location = new ResourceReference();
        location.setDisplay(string_("Soliz House"));
        Period period = new Period();
        period.setStart(new DateTime() {{
            setValue("2013-11-29");
        }});
        period.setEnd(new DateTime(){{
            setValue("2013-12-01");
        }});
        EncounterLocationComponent locationComponent = new EncounterLocationComponent(location, period);
        encounter.getLocation().add(locationComponent);

        new JsonComposer().compose(System.out, encounter, true);
    }

    private String_ string_(final String value) {
        return new String_() {{
            setValue(value);
        }};
    }
}

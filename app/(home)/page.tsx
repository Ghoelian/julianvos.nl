import { Card, CardContent, CardHeader } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const gridProps = {
  xs: 6,
  md: 4,
  p: 2,
};

export default function Home() {
  return (
    <Grid2 container>
      <Grid2 {...gridProps}>
        <Card>
          <CardHeader title="Lorem ipsum dolor sit amet" />
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem
            ligula, mollis vitae malesuada at, tristique id turpis. Etiam id
            libero semper, rhoncus velit vitae, fringilla ante. Integer sed odio
            feugiat, tincidunt orci sed, luctus tellus. Phasellus elementum
            pellentesque felis sed maximus. Nunc elementum at orci eget semper.
            Curabitur tristique tempor maximus. Vivamus nulla augue, volutpat
            eget erat sed, pharetra dapibus nibh. Nullam cursus sed ex at
            aliquet. Morbi vitae cursus quam. Fusce fermentum massa quis enim
            blandit luctus. Praesent sagittis vitae lorem sed facilisis.
            Suspendisse maximus maximus dolor auctor bibendum. Sed facilisis ut
            dolor in rhoncus. Donec non condimentum neque, nec lacinia eros.
            Maecenas posuere dolor sit amet dui finibus convallis. Sed convallis
            nibh eu mollis consequat.
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 {...gridProps}>
        <Card>
          <CardHeader title="Pellentesque ullamcorper massa nec viverra" />
          <CardContent>
            Pellentesque ullamcorper massa nec viverra commodo. Nunc at sem
            dictum, convallis dui pellentesque, volutpat arcu. Quisque
            pellentesque purus in aliquet elementum. Donec molestie nisl ut nibh
            accumsan, sit amet mattis nulla mollis. Sed justo enim, placerat ut
            sapien ac, iaculis iaculis leo. Cras commodo est eget nisl
            ullamcorper cursus. Aliquam a egestas nisi. Proin dapibus eget nisi
            sagittis ornare. Aliquam erat volutpat. Proin dignissim pretium
            ligula, vel consectetur erat convallis facilisis. Sed interdum metus
            vulputate, sagittis erat eu, vulputate sem. Nullam accumsan tempus
            sem, nec ullamcorper orci vestibulum id. Donec aliquet dui ut ante
            ullamcorper dapibus. Vivamus sem urna, ornare nec felis ut,
            consequat aliquam tellus. Sed id nisl ullamcorper, finibus ante at,
            scelerisque augue. Nunc quis gravida arcu, sed pharetra purus.
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 {...gridProps}>
        <Card>
          <CardHeader title="Maecenas tristique ante eget" />
          <CardContent>
            Maecenas tristique ante eget viverra tincidunt. Donec elementum eros
            velit, nec fringilla enim varius id. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            facilisis leo mauris. Nunc sit amet ipsum velit. Mauris fermentum
            felis odio, at imperdiet nisl congue eu. Ut nec augue maximus,
            fermentum urna non, rutrum leo. Fusce eu odio felis. Fusce cursus
            iaculis sem, a auctor nunc maximus quis. Quisque vestibulum maximus
            tempus. Nam pulvinar faucibus nibh. Vivamus elementum turpis ligula,
            vitae feugiat massa tincidunt nec. Vestibulum consectetur mi sit
            amet ipsum vestibulum elementum. Aenean hendrerit urna quis vehicula
            eleifend.
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 {...gridProps}>
        <Card>
          <CardHeader title="Quisque maximus urna vehicula" />
          <CardContent>
            Quisque maximus urna vehicula lectus pharetra, ornare bibendum
            turpis bibendum. Pellentesque interdum, arcu in hendrerit imperdiet,
            eros enim aliquet nibh, posuere elementum justo tortor fringilla mi.
            Maecenas consequat pretium risus, in porta massa cursus eu. Vivamus
            condimentum efficitur accumsan. Fusce diam eros, commodo laoreet
            diam fringilla, tempus cursus diam. Nullam a nunc vel mi ullamcorper
            aliquet. Praesent quis hendrerit urna, at aliquam lorem. Vivamus in
            interdum justo, sit amet tincidunt nulla. Aliquam fringilla
            malesuada massa, sed ornare metus mattis quis. Cras sit amet blandit
            libero, ut lacinia arcu. Pellentesque in nunc malesuada, sodales sem
            quis, facilisis magna.
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 {...gridProps}>
        <Card>
          <CardHeader title="Cras at porta mi" />
          <CardContent>
            Cras at porta mi. Duis augue ex, blandit vel iaculis non, mollis et
            lorem. Quisque non luctus lacus. Mauris id erat at metus aliquam
            imperdiet. Suspendisse eget nisl id elit auctor suscipit. Ut turpis
            massa, accumsan eu aliquam sed, interdum sit amet elit. Fusce
            hendrerit lobortis nisl in ornare.
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}

<template>
  <div>
    <button @click="createDocument">Create Document</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const createDocument = () => {
      const preHtml =
          "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      const postHtml = '</body></html>';

      const contentHtml = `
        <div style='page-break-before: always; position: fixed; top: 0; left: 0; width: 100%; text-align: left'>
            <img src="logo.png" width="152" height="56" alt="logo">
        </div>

        <div style="width: 100%">
          <p class="MsoNormal" style="text-align:justify"><span lang="ru" style="font-size:
15.0pt;line-height:115%;font-family:Nunito;mso-fareast-font-family:Nunito;
mso-bidi-font-family:Nunito">Hello,<b style="mso-bidi-font-weight:normal">
          *CLIENT-NICK-NAME*!</b></span></p>

          <h3 style="text-align:justify"><a name="_sd1mhtds8gts"></a><span lang="ru" style="font-size:12.0pt;line-height:115%;font-family:Nunito;mso-fareast-font-family:
          Nunito;mso-bidi-font-family:Nunito">*DESCRIPTION*<o:p></o:p></span></h3>

          <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">
          CONDITIONS</b></h2>

          <table width="601" border="1" cellspacing="0" cellpadding="0"
                 style="
                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;
                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;
                 mso-border-alt:solid #F1C232 1.0pt;
                 mso-border-insideh:1.0pt solid #F1C232;
                 mso-border-insidev:1.0pt solid #F1C232;">
              <tbody>
                  <tr>
                      <td width="229" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Header 1</p></td>
                      <td width="164" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Header 2</p></td>
                      <td width="208" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Header 3</p></td>
                  </tr>
                  <tr>
                      <td width="229" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 1</p></td>
                      <td width="164" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 2</p></td>
                      <td width="208" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 3</p></td>
                  </tr>
                  <tr>
                      <td width="229" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 1</p></td>
                      <td width="164" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 2</p></td>
                      <td width="208" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 3</p></td>
                  </tr>
                  <tr>
                      <td width="229" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 1</p></td>
                      <td width="164" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 2</p></td>
                      <td width="208" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Tail 3</p></td>
                  </tr>
              </tbody>
          </table>
        </div>
      `;

      // Combine content with "Page Break" at the beginning
      // const html = preHtml + initialPageBreak + contentHtml + postHtml;
      const html = preHtml + contentHtml + postHtml;

      const blob = new Blob(['\ufeff', html], {
        type: 'application/msword',
      });

      // Specify file name
      const filename = 'document.doc';

      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Create a link to the file
        const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);

        // Setting the file name
        downloadLink.href = url;
        downloadLink.download = filename;

        // Trigger the download
        downloadLink.click();

        document.body.removeChild(downloadLink);
      }
    };

    return {
      createDocument,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

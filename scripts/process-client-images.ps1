Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceRoot = Join-Path $projectRoot 'client-materials\incoming\review-extracted'
$outputRoot = Join-Path $projectRoot 'public\images\programs\galleries'

$programSources = [ordered]@{
  'agnishikha' = @('01-adoscent-girl-empowerment', '02-adoscent-girl-empowerment')
  'sanskriti' = @('03-Art-And-culture')
  'krishi' = @('04-Art-And-culture')
  'chetana' = @('05-awareness-program')
  'kishalay' = @('06-kishalay', '07-kishalay')
  'seva' = @('08-philanthropy')
  'jibika' = @('09-women-empowerment', '10-women-empowerment', '11-women-empowerment')
}

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object MimeType -eq 'image/jpeg'
$encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality,
  [long]78
)

foreach ($program in $programSources.Keys) {
  $destination = Join-Path $outputRoot $program
  New-Item -ItemType Directory -Force -Path $destination | Out-Null

  $files = foreach ($collection in $programSources[$program]) {
    Get-ChildItem -LiteralPath (Join-Path $sourceRoot $collection) -File | Sort-Object Name
  }

  $number = 0
  foreach ($file in $files) {
    $number++
    $source = [System.Drawing.Image]::FromFile($file.FullName)
    $scale = [Math]::Min(1, 1400 / [Math]::Max($source.Width, $source.Height))
    $width = [Math]::Max(1, [int]($source.Width * $scale))
    $height = [Math]::Max(1, [int]($source.Height * $scale))
    $bitmap = New-Object System.Drawing.Bitmap $width, $height
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($source, 0, 0, $width, $height)

    $filename = 'photo-{0:D3}.jpg' -f $number
    $bitmap.Save((Join-Path $destination $filename), $jpegCodec, $encoderParameters)

    $graphics.Dispose()
    $bitmap.Dispose()
    $source.Dispose()
  }

  Write-Output "$program`: $number images"
}

$encoderParameters.Dispose()

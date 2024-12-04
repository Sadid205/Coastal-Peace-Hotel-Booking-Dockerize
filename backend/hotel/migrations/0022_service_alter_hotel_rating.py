# Generated by Django 5.1.1 on 2024-10-23 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0021_bestroom_alter_hotel_rating'),
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('service_name', models.CharField(max_length=300)),
                ('images', models.JSONField(default=list)),
                ('price', models.IntegerField(default=None)),
                ('description', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='hotel',
            name='rating',
            field=models.CharField(choices=[('🌟🌟', '🌟🌟'), ('🌟🌟🌟', '🌟🌟🌟'), ('🌟', '🌟'), ('🌟🌟🌟🌟', '🌟🌟🌟🌟'), ('🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟')], max_length=10),
        ),
    ]
